async function mess() {
    console.log(`SELECT TOP (100) * FROM [view_zakaz] where [code_courier] != 0 and [tg_status] = 0 and [zakaz_status] != -1 and [id_telegram] != 'undefined' and CAST([zakaz_date_1] as date) = CAST(GETDATE()as date) order by codeid desc`);
    var zakaz = await db.query_await(`SELECT TOP (100) * FROM [view_zakaz] where [code_courier] != 0 and [tg_status] = 0 and [zakaz_status] != -1 and [id_telegram] != 'undefined' and CAST([zakaz_date_1] as date) = CAST(GETDATE()as date) order by codeid desc`)
    for (var i = 0; i < zakaz.recordset.length; i++) {
      var id_tg = zakaz.recordset[i].id_telegram
  
      var options = {
        'method': 'POST',
        'url': 'http://11.12.1.158/new_message',
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cookie': 'connect.sid=s%3AfYZEPQjF10n6v4lIF2zVFZmMc9FgoiYs.NooAsLIktUBNpuH8dVZIGDgM%2F6W7lh%2Fk6HeHzCH%2Fufs'
        },
        form: {
          'bot_key': 'ZAKAZ_KG_Bot', //-- ключ бота
          'tg_id': `${id_tg}`, //-- телеграм id 
          'message': `${zakaz.recordset[i].courier_fio}, у вас заказ, посмотрите в приложении!`, //-- сообщение 
          'send_all': '0' //-- 0 отправить только указанному пользователю 1 - отправить всем кто активировал бота
        }
      };
      console.log(id_tg, 'id')
      function responer(element) {
        return async function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body, 'response');
  
          await db.query_await(`UPDATE [zakaz] set [tg_status] = 1 where [codeid] = ${element.codeid}`);
          console.log(`UPDATE [zakaz] set [tg_status] = 1 where [codeid] = ${element.codeid}`);
        }
      }
  
      request(options, responer(zakaz.recordset[i]));
  
    };
  }
  setInterval(mess, 60000);