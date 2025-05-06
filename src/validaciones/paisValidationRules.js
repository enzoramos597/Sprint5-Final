import { body } from 'express-validator';

export const paisValidationRules = () => [
  // Nombre Oficial
  body('name.nativeName.spa.official')
    .notEmpty().withMessage('El nombre oficial no debe estar vacío.')
    .isString().withMessage('El nombre oficial debe ser una cadena de texto.')
    .isLength({ min: 3, max: 90 }).withMessage('El nombre oficial debe tener entre 3 y 90 caracteres.')
    .custom((value) => {
      if (value.trim() !== value) {
        throw new Error('El nombre oficial no debe tener espacios al inicio o final.');
      }
      return true;
    }),

  // Capital
  body('capital')
    .isArray().withMessage('La capital debe ser un array.')
    .custom((capitales) => {
      capitales.forEach((capital) => {
        if (typeof capital !== 'string') {
          throw new Error('Cada capital debe ser una cadena de texto.');
        }
        if (capital.trim() !== capital) {
          throw new Error('Cada capital no debe tener espacios al inicio o final.');
        }
        if (capital.length < 3 || capital.length > 90) {
          throw new Error('Cada capital debe tener entre 3 y 90 caracteres.');
        }
      });
      return true;
    }),

  // Borders
  body('borders')
    .isArray().withMessage('Las fronteras deben ser un array.')
    .custom((borders) => {
      borders.forEach((border) => {
        if (!/^[A-Z]{3}$/.test(border)) {
          throw new Error('Cada frontera debe ser un código de 3 letras mayúsculas sin espacios.');
        }
      });
      return true;
    }),

  // Área
  body('area')
    .notEmpty().withMessage('El área es obligatoria.')
    .custom((value) => {
      if (typeof value === 'string' && value.trim() !== value) {
        throw new Error('El área no debe tener espacios al inicio o al final.');
      }
      if (isNaN(value) || Number(value) <= 0) {
        throw new Error('El área debe ser un número positivo.');
      }
      return true;
    }),

  // Población
  body('population')
    .notEmpty().withMessage('La población es obligatoria.')
    .custom((value) => {
      if (typeof value === 'string' && value.trim() !== value) {
        throw new Error('La población no debe tener espacios al inicio o al final.');
      }
      if (!Number.isInteger(Number(value)) || Number(value) <= 0) {
        throw new Error('La población debe ser un número entero positivo.');
      }
      return true;
    }),

  // Timezones
  body('timezones')
    .isArray().withMessage('Las zonas horarias deben ser un array.')
    .custom((zones) => {
      zones.forEach((zone) => {
        if (typeof zone !== 'string') {
          throw new Error('Cada zona horaria debe ser una cadena.');
        }
        if (zone.length < 3 || zone.length > 60) {
          throw new Error('Cada zona horaria debe tener entre 3 y 60 caracteres.');
        }
      });
      return true;
    }),

  // Creador
  body('creador')
    .notEmpty().withMessage('El campo creador no debe estar vacío.')
    .isString().withMessage('El creador debe ser una cadena de texto.')
    .isLength({ min: 3, max: 60 }).withMessage('El creador debe tener entre 3 y 60 caracteres.')
    .custom((value) => {
      if (value.trim() !== value) {
        throw new Error('El creador no debe tener espacios al inicio o al final.');
      }
      return true;
    }),
];
