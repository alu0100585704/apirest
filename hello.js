var http=require("http"),
    fs=require("fs");

    
http.createServer(function(req,res){
        
/*    if (req.url.indexOf("favicon.ico") > 0) {
        return ;
    }*/


    fs.readFile("./index.html",function(err,data){
        var nombre ="variable";
        var html_string=data.toString();
        var variables= html_string.match(/[^\{\}]+(?=\})/g);
        var Oparametros={};
        if (req.url.indexOf("?")>0)   {
            var url_data=req.url.split("?");
            
            for (var j=0; j < url_data[1].indexOf("+");j++)
            {
                url_data[1]=url_data[1].replace("+", " ");
            }
            var url_parametros=url_data[1].split("&");
           for (var j=0; j< url_parametros.length;j++) 
           {
             var param=url_parametros[j].split("=");
            Oparametros[param[0]]=param[1];
            //console.log(url_parametros[j]+" \n" + param[0]+ "\n " + param[1]);

           }
           console.log("Variable nombre : " +Oparametros["nombre"]);
           console.log(eval("Oparametros."+ "nombre"));
           console.log("Variable nombre2 : " +Oparametros["nombre2"]);

           
        }

        for (var i= variables.length-1; i>= 0; i--) {
            //var value= eval(variables[i]);
            html_string=html_string.replace("{"+variables[i]+"}",Oparametros[variables[i]]);
                }
        res.writeHead(200,{"Content-Type":"text/html"});      

        res.write(html_string);
        //res.write("que comor");
        res.end();
        
    });
    

    }).listen(8080);

