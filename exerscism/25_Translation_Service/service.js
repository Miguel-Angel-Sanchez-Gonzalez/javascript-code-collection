export class TranslationService {
  constructor(api) {
    this.api = api;
  }

  free(text) {
    return this.api.fetch(text).then((result) => result.translation);
  }

  batch(texts) {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }

    return Promise.all(texts.map((text) => this.api.free(text)))
      .then((translations) => {
        return translations;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  request(text) {
    const maxRetries = 3;
    let attempts = 0;

    const attemptRequest = () => {
      attempts++;
      return new Promise((resolve, reject) => {
        this.api.request(text, (error) => {
          if (error === undefined) {
            resolve(undefined);
          } else if (
            error instanceof Error &&
            attempts < maxRetries &&
            error.name !== "Untranslatable"
          ) {
            attemptRequest().then(resolve, reject); // Llamada recursiva
          } else {
            reject(error);
          }
        });
      });
    };

    return attemptRequest();
  }

  premium(text, minimumQuality) {
    return this.api
      .fetch(text)
      .then((result) => {
        if (result.quality < minimumQuality) {
          return Promise.reject(new QualityThresholdNotMet(text));
        } else {
          return result.translation;
        }
      })
      .catch((error) => {
        if (error instanceof Error && error.name === "Untranslatable") {
          return Promise.reject(new Untranslatable(text));
        } else if (error.name === "NotAvailable") {
          return this.request(text).then(() => {
            return this.api.fetch(text).then((result) => {
              if (result.quality < minimumQuality) {
                return Promise.reject(new QualityThresholdNotMet(text));
              } else {
                return result.translation;
              }
            });
          });
        } else {
          return Promise.reject(error);
        }
      });
  }
}

export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );

    this.text = text;
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}
