
const AWS = require("aws-sdk");

const credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
AWS.config.update({
  credentials,
  region: "ap-south-1",
});
const s3 = new AWS.S3();

const getAllS3Pages = () =>{
    const params: any= {
        Bucket:'manmatters-products-staging',
        Delimiter: '/products',
        Prefix: ''
    };
    const arr: string[] = [];
    s3.listObjects(params, (err:any, data:any) => {
        if (err) {
            return 'There was an error viewing your album: ' + err.message
        }else{    
            data.Contents.forEach((obj:any) =>{
                if(obj.Key.includes(".json")){
                    arr.push(obj.Key.split("products/")[1]);
                }
            })
        }
      console.log(JSON.stringify(arr));
    })

}

export const uploadToS3 = async (fileName:string, bucketName:string, body:any, contentType="application/json") => {
    let status = false;
    const params:any = {
      Bucket: bucketName,
      Key: fileName,
      Body: body,
    };
    contentType && (params.ContentType = contentType);
  
    const upload:Promise<any> = s3.upload(params).promise();
    await upload
      .then(function (data) {
        status = true;
      })
      .catch(function (error) {
        console.log(error.message);
        status = false;
      });
    return status;
  }