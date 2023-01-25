import CryptoJS from "crypto-js";
import defaultValue from '../constants/defaultValue'

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const validate = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.email) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.password) {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.isAlphaNumeric) {
    const pattern = /^[a-z\d\-_\s]+$/i;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};

export const timeFormat = (time) => {
  var dt = new Date(time);
  if (dt.getDate() === new Date().getDate()) {
    return `${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`
  }
  return `${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`

}

export const dateFormat = (time, oldTime) => {
  var dt = new Date(time);
  if (oldTime === undefined) {
    return `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(2, '0').slice(-2)}`
  }
  var oldDt = new Date(oldTime);
  if ((dt.getDate() === oldDt.getDate()) && (dt.getMonth() === oldDt.getMonth()) && (dt.getFullYear() === oldDt.getFullYear())) {
    return null
  } else if (dt.getDate() === new Date().getDate()) {
    return `Today`
  } else {
    return `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(2, '0').slice(-2)}`
  }
}

const queryStringBulder = (obj) => {
  try {
    let str = [];
    for (let p in obj)
      if (obj.hasOwnProperty(p) && p !== null && obj[p] !== '') {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  } catch (e) {
    return ''
  }
}

export const apiEncryptionData = (data, isParam) => {
  try {
    const cipherDoc = CryptoJS.AES.encrypt(JSON.stringify(data), defaultValue[defaultValue.env].apiEncryptionSecret).toString();
    const varData = {
      data: cipherDoc,
      encritption: true
    }
    if (isParam) {
      if (defaultValue[defaultValue.env].apiEncryption) {
        return '?' + queryStringBulder(varData)
      } else {
        return '?' + queryStringBulder(data)
      }
    } else {
      if (defaultValue[defaultValue.env].apiEncryption) {
        return varData
      } else {
        return data
      }
    }
  } catch (e) {
    return data
  }
}

export const apiDecryptionData = (data) => {
  try {
    if (data?.encritption && data?.data) {
      const bytes = CryptoJS.AES.decrypt(data.data.toString(), defaultValue[defaultValue.env].apiEncryptionSecret);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    } else {
      return data
    }
  } catch (e) {
    return data
  }
}

export const quaryData = (dataUrl) => {
  try {
    const paramArr = dataUrl.slice(dataUrl.indexOf('?') + 1).split('&');
    const params = {};
    paramArr?.map(param => {
      const [key, val] = param.split('=');
      params[key] = decodeURIComponent(val);
    })
    return params;
  } catch (e) {
    return {}
  }
}

export { queryStringBulder };