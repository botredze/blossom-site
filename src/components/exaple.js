
app.post("/create_zakaz", async function (req, res) {
    var data = req.body
    console.log(req.body, "///////////////");
    var comment = data.comment_zakaz
    if (data.hourDeliver != '') {
      comment += " Время доставки: " + data.hourDeliver
    }
    var address = req.body.address
    console.log(address, "++++++++++++");
    /// 200 sum dostavka hard code
  
    var error_create_zakaz = exec [create_auto_zakaz_sait] '${data.phone}', '${data.fio}', '', '${address}', '', '${comment}', '${data.sdacha}', 200, ${data.summ}, 0, ${data.type_oplata}, 3, 0
  
    var error_create_estab = ''
    var error_zakaz_product = ''
    db.query_result(
      exec [create_auto_zakaz_sait] '${data.phone}', '${data.fio}', '', '${address}', '', '${comment}', '${data.sdacha}', 200, ${data.summ}, 0, ${data.type_oplata}, 3, 0,
      async function (data1) {
        var code_client = data1.recordset[0].code_client
        var new_auto_zakaz = await db.query_await(
          SELECT TOP(1) codeid FROM [auto_zakaz] where [code_client] = ${code_client} ORDER BY codeid DESC
        );
        var new_auto_zakaz_codeid = new_auto_zakaz.recordset[0].codeid;

        // for (var i = 0; i < data.product_list.length; i++) {
        //   // console.log(data.product_list[i].estab, "cfdvfvfdvdf");
        //   error_create_estab = exec [add_auto_zakaz_establishment] ${new_auto_zakaz_codeid}, ${data.product_list[i].code_estabs}
        //   var res_establ = await db.query_await(
        //     exec [add_auto_zakaz_establishment] ${new_auto_zakaz_codeid}, ${data.product_list[i].code_estabs}
        //   );
        // }
        for (var e = 0; e < data.product_list.length; e++) {
          error_zakaz_product = exec [add_auto_zakaz_product] ${new_auto_zakaz_codeid}, ${data.product_list[e].code_estabs}, ${data.product_list[e].codeid_products}, 0, ${data.product_list[e].count}, ${data.product_list[e].price}, ${data.product_list[e].filial}, ${data.product_list[e].count_posuda}
          var res_prod = 
        }
      }
    );
    res.send({ result: 1, error_create_zakaz: error_create_zakaz, error_create_estab: error_create_estab, error_zakaz_product: error_zakaz_product })
  // })
  