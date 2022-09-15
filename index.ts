import { uploadToS3 } from "./helpers/s3-helper";
import { mapJson } from "./mappers/mapJson";
const axios = require("axios");
const fs = require("fs");

const chunk = (arr:any, chunkSize:any) => {
    if (chunkSize <= 0) throw "Invalid chunk size";
    var R = [];
    for (var i=0,len=arr.length; i<len; i+=chunkSize)
      R.push(arr.slice(i,i+chunkSize));
    return R;
}

const arr: any = ["10046817.json","10049210.json","10049339.json","10049340.json","10100137.json","10119716.json","10121506.json","10122568.json","10122744.json","10122745.json","10220967.json","10232650.json","10232864.json","10232866.json","1025696.json","1045858.json","1045867.json","10561953.json","10562165.json","10562166.json","10562306.json","10562462.json","10562463.json","10562547.json","10562589.json","10562595.json","10586964.json","10587154.json","10587161.json","10587591.json","10587883.json","10587910.json","10588209.json","10588293.json","10588299.json","10588426.json","10588492.json","10588493.json","10595077.json","10648556.json","10648703.json","10648704.json","10648836.json","10648887.json","10648888.json","10654036.json","10654431.json","10654436.json","1066625.json","1066750.json","10738023.json","10738110.json","10738208.json","10738209.json","10738380.json","10738584.json","10738591.json","10739162.json","10739447.json","10739682.json","10739950.json","10740029.json","10740031.json","10740111.json","10741025.json","10741251.json","10741301.json","10741302.json","10741421.json","10741487.json","10741491.json","10741648.json","10741771.json","10741777.json","10742803.json","10742927.json","10742938.json","10815464.json","10815466.json","1082786.json","1082836.json","10836344.json","10836393.json","10836394.json","10836668.json","10836669.json","10841180.json","10841181.json","10846113.json","10846154.json","10895494.json","1090128.json","1090150.json","1090182.json","10956387.json","11022502.json","11038613.json","11111.json","1112141.json","1112187.json","1112221.json","1112224.json","1112337.json","1112347.json","1112371.json","1112382.json","1112397.json","1112408.json","1112415.json","1144207.json","1148074.json","1148201.json","1148203.json","1148204.json","1149073.json","1152307.json","1152317.json","11603122.json","11603218.json","11603293.json","11603294.json","11603511.json","11603556.json","11603557.json","11604493.json","11604595.json","11605574.json","11605627.json","1182231.json","11851348.json","11851535.json","11851573.json","1185963.json","11875792.json","11876034.json","11876038.json","11876206.json","11876311.json","11935422.json","11935922.json","11935936.json","11954287.json","11954329.json","11954331.json","11954347.json","11979406.json","11979624.json","11979627.json","11981580.json","11981617.json","11981618.json","1246476.json","1254313.json","1254445.json","1257104.json","1258152.json","1258217.json","12603983.json","12626596.json","12626784.json","12626785.json","12630191.json","12630203.json","12655308.json","12655372.json","12656228.json","12656276.json","12656283.json","12656381.json","12656407.json","12656535.json","1266689.json","1266704.json","12679556.json","12745254.json","12745391.json","12745406.json","12745691.json","12746267.json","12746693.json","12746739.json","12746746.json","12767458.json","12767559.json","12767576.json","12767650.json","12767655.json","1279455.json","1294086.json","1296000.json","13021530.json","13024028.json","13024320.json","13024829.json","13026286.json","13113405.json","13115515.json","13116249.json","13116523.json","13145310.json","13199464.json","13199512.json","13199610.json","13222757.json","13292051.json","13292052.json","13294172.json","13295411.json","1330631.json","13334903.json","13410495.json","135365.json","135393.json","135528.json","13616983.json","1369915.json","1369922.json","1371418.json","1371667.json","1371731.json","13738873.json","13738888.json","13738901.json","13739429.json","1376982.json","1377956.json","1377974.json","1377990.json","1379740.json","1379742.json","1379745.json","1379751.json","1379758.json","1379761.json","1405669.json","1407708.json","1407763.json","1408285.json","1408325.json","1408346.json","1408371.json","1408409.json","1408434.json","1408457.json","1408480.json","1408492.json","1408500.json","1408573.json","1408664.json","1408778.json","1408812.json","1408836.json","1408883.json","141191.json","141464.json","141646.json","141665.json","1443046.json","144676.json","144685.json","1460518.json","1464706.json","1475431.json","1587.json","1596.json","1601.json","1605.json","1610.json","1613.json","1620.json","1623.json","1626.json","1629.json","1633.json","1640.json","1645.json","1650.json","1656.json","1659.json","1666.json","16677366.json","1669.json","167214.json","167245.json","1675.json","16755030.json","16755441.json","16755529.json","16767170.json","16769547.json","16777412.json","16777435.json","16777540.json","16778293.json","16778357.json","16779132.json","1680.json","16836810.json","16849848.json","16886082.json","16886086.json","16886639.json","16901459.json","16947340.json","16948935.json","16948975.json","16969619.json","17036119.json","17036165.json","17176135.json","17178446.json","17178468.json","17262754.json","1814.json","1851976.json","1854920.json","1869883.json","1869952.json","1870080.json","1870122.json","1870141.json","1874486.json","1906930.json","1907090.json","1907136.json","1918.json","1921800.json","1972728.json","1972748.json","2007083.json","2017551.json","2052290.json","2052312.json","2052328.json","2052338.json","2052353.json","2053030.json","20555922.json","2064838.json","20652343.json","20672530.json","20673265.json","20870470.json","20874806.json","20875849.json","20875999.json","20876225.json","20878031.json","20878442.json","20881432.json","2099293.json","2132883.json","21369146.json","21456159.json","21456392.json","21521699.json","21629175.json","2171963.json","21779361.json","2185823.json","2185927.json","21888807.json","22189260.json","2225504.json","2225527.json","2225548.json","2225549.json","2225568.json","2225576.json","2235645.json","2241630.json","2241709.json","22474844.json","22475345.json","2265139.json","2265233.json","2265267.json","2265280.json","2265293.json","2265323.json","2265331.json","2265422.json","2265472.json","227252.json","229265.json","229308.json","229411.json","229440.json","23539589.json","2355440.json","23568182.json","2387275.json","2389529.json","252199.json","252225.json","252254.json","252262.json","252370.json","252378.json","252384.json","25460961.json","2552301.json","2552354.json","2552381.json","25523845.json","2552406.json","2552425.json","2552449.json","2552504.json","2552532.json","2552554.json","2552583.json","2552599.json","2552612.json","2552623.json","2552641.json","25560499.json","2558908.json","25750445.json","25847697.json","25852218.json","25969690.json","26131461.json","26133492.json","26166716.json","26166717.json","26166718.json","26166719.json","26166720.json","26166721.json","26166722.json","26166723.json","26166724.json","26166725.json","26166726.json","26166727.json","26166728.json","26166729.json","26166730.json","26166731.json","26166732.json","26166733.json","26166734.json","26166736.json","26172776.json","26173983.json","26222556.json","268487.json","268730.json","2740807.json","2740817.json","2740835.json","2740836.json","2740842.json","2740864.json","2753036.json","2753040.json","2759794.json","2760482.json","2760486.json","2760487.json","2760534.json","2760564.json","2760673.json","2760735.json","2760766.json","2847834.json","2861144.json","2921463.json","2959004.json","2959098.json","2959107.json","2959219.json","3013549.json","3014106.json","3014114.json","3014147.json","3014157.json","3014158.json","3053009.json","3104302.json","3104323.json","3104324.json","3171.json","3292.json","33001.json","33010.json","33061.json","33062.json","3314994.json","3315365.json","3315397.json","3349950.json","3405426.json","3405440.json","3405447.json","3405457.json","3405466.json","3405467.json","3405499.json","3405550.json","3405551.json","3405642.json","3405682.json","3405683.json","3405784.json","3405915.json","3405916.json","3421821.json","3422534.json","3422659.json","3426866.json","3426918.json","3426937.json","3440699.json","3451551.json","3451583.json","3451987.json","3452019.json","3452030.json","3452031.json","3452049.json","3452053.json","3452065.json","3452091.json","3469115.json","3526713.json","3526736.json","3546921.json","3546947.json","3546959.json","3546963.json","3546975.json","3547008.json","3547016.json","3547025.json","3547030.json","3547077.json","3547113.json","3547231.json","3547480.json","3548366.json","3563207.json","3563251.json","388715.json","403118.json","43791.json","43793.json","43794.json","478815.json","479725.json","480647.json","480656.json","480692.json","480712.json","480722.json","480727.json","4875.json","4876.json","5100216.json","5144612.json","5270243.json","5270290.json","5270346.json","5270367.json","5270387.json","5270539.json","5270605.json","5270640.json","5270666.json","5270678.json","5270689.json","5270704.json","5270727.json","5270748.json","5270749.json","5270787.json","5270828.json","5270829.json","5270835.json","5270843.json","5270844.json","5270860.json","5270907.json","5270908.json","5270918.json","5270934.json","5270935.json","5281449.json","5369912.json","5454678.json","5463791.json","54804.json","54833.json","54853.json","54908.json","54952.json","5516756.json","553133.json","55533.json","55567.json","55612.json","5565286.json","5583216.json","5583308.json","5583309.json","5583334.json","5583414.json","5583415.json","5583489.json","5583537.json","5583538.json","5583679.json","5583716.json","5583717.json","5583832.json","5583884.json","5583885.json","5583900.json","5583969.json","5583970.json","5586454.json","561876.json","5618890.json","5619112.json","5619206.json","5619497.json","5619621.json","5619639.json","562072.json","562150.json","5636535.json","5636663.json","5847324.json","5847351.json","5847385.json","5847416.json","5850309.json","5850389.json","5850423.json","5850565.json","5850624.json","5850667.json","5901027.json","591102.json","5955294.json","5955334.json","6012863.json","607779.json","6102393.json","6150865.json","6151085.json","658394.json","658399.json","658421.json","658430.json","6888867.json","6888897.json","6888898.json","6889089.json","6889194.json","6889196.json","6889603.json","6889972.json","6889973.json","6890513.json","6891283.json","6891284.json","6923914.json","6974044.json","6974181.json","7171136.json","7171329.json","771616.json","771724.json","771745.json","8266590.json","9061.json","9064.json","9066.json","9611208.json","9611209.json","9611210.json","9643540.json","9643669.json","9643670.json","9659119.json","9659235.json","9659236.json","9659237.json","9659448.json","9659576.json","9751566.json","9751794.json","9751795.json","9774061.json","9774132.json","9774153.json","9844520.json","9845172.json","9845173.json","9942891.json","9943287.json","9969.json","997271.json","997286.json","997288.json","997298.json","997305.json","997306.json","997307.json","9975.json"]

// const arr = ["16886082.json"]

const main = async () =>{
    const chunks = chunk(arr,10);
    let cnt=0;
    // console.log(chunks)

    for(let i=0;i<chunks.length;i++){
        const prom:any[] = [];
        chunks[i].forEach((x:any)=>{
            prom.push(axios.get("http://api.manmatters.com?wc-ajax=get_single_product_json&product_id="+x.split(".json")[0]))
        })
        const res: any = await Promise.all(prom);
        
        res.forEach((json:any, index:any) =>{
            const fileName = chunks[i][index];
            try{
                const transformed = mapJson(json.data.result);
                cnt++;
                fs.writeFileSync('./output_15Sept/'+fileName, JSON.stringify(transformed, null, 4) , 'utf-8');
            }catch(e:any){
                console.log(e);
                console.log("error in file: "+ fileName)
            }
            
        })
        timer(100);
    }
    console.log("DONE:: Processed JSONS: "+ cnt);

}

const timer = (ms:any) => new Promise(res => setTimeout(res, ms))

main();
