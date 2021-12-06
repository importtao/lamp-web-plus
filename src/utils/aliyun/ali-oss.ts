import OSS from 'ali-oss'
import {stsTokenApi} from "/@/api/sys/upload";

let stsInfo = {
  accessKeyId: null,
  accessKeySecret: null,
  securityToken: null,
  bucketName: null,
  dir: null,
  requestId: null,
  host: null
}
export function uploadToAliyunOss (name, file) {
  try {
    return new Promise((resolve, reject) => {
      if (!stsInfo.stsToken) {
        return stsTokenApi().then(result => {
          console.log(result)
          stsInfo = result.credentials
          resolve(stsInfo)
        })
      } else {
        resolve(stsInfo)
      }
    }).then(stsInfo => {
      const client = new OSS({
        region: 'oss-cn-zhangjiakou',
        accessKeyId: stsInfo.accessKeyId,
        accessKeySecret: stsInfo.accessKeySecret,
        stsToken: stsInfo.securityToken,
        bucket: 'lamp-materials'
      })
      // return client.put(stsInfo.dir + name, File)
      return client.multipartUpload(name, file)
    })
  } catch (e) {
    console.log(e)
  }
}

