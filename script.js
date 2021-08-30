

$.getJSON(
    "https://data.messari.io/api/v1/assets/bitcoin/metrics",
    function(data){
        //api's :) //
    console.log(data);
  
    var price = Number.parseFloat(data.data.market_data.price_usd).toFixed(2) ;    /* done */
    $(".price").append(price + "$")
    var change = data.data.market_data.percent_change_usd_last_24_hours ;    /* done */
    $(".change").append(change)

    var high = Number.parseFloat(data.data.all_time_high.price).toFixed(2)  ;    /* done */
    $(".high").append(high + "$")
    var day = data.data.all_time_high.at ;    /* done */
    $(".day").append(day)
    var low = data.data.cycle_low.price ;    /* done */
    $(".low").append(low + "$")
    var day2 = data.data.cycle_low.at ;    /* done */
    $(".day2").append(day2)

    var trade = data.data.market_data.last_trade_at ;    /* done */
    $(".trade").append(trade)
    var marketcap = (data.data.marketcap.current_marketcap_usd);     /* done */
    $(".marketcap").append(marketcap + "$")
    var volume = data.data.market_data.real_volume_last_24_hours ;    /* done */
    $(".volume").append(volume) 

        
    }
    );





