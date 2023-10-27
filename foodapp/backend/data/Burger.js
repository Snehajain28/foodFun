const axios = require('axios');


exports.burgerData = async(req,res) => {
     

    try{
        const options = {
            method: 'GET',
            url: 'https://burgers-hub.p.rapidapi.com/burgers',
            headers: {
              'X-RapidAPI-Key': '55c735319emsh75569a86e425455p15608cjsn51790e9dc3d1',
              'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
             
              res.status(200).json({
                success:"true",
                response,
                message:"burger data"
              })
          } catch (error) {
            console.log("cbsdgy");
              console.error(error);
          }
    }
    catch(e) {
        console.log(e)
        console.log("burger data error")
    }

}
