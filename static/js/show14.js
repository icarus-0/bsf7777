var match_id_show13 = 0;
document.addEventListener('contextmenu', event => event.preventDefault());

$(document).ready(function(){
  $("#refresh, #refresh2").click(function(){
    location.reload();
  });

  // MarketTable start\


  // $('.MarketTable').click(function(e){
  //   var cell = $(e.target).get(0)
  //   var clicked_value = $(cell).html();
  //   // console.log("odds_clicked_value =>",clicked_value);
  //   var float_convert = parseFloat(clicked_value);
  //   var add_val = float_convert + 1
  //   var updated_clicked_value = add_val.toFixed(2)
  //   // console.log("odds_updated_clicked_value =>",updated_clicked_value);

  //   var win_size = $(document).width();

  //   if(win_size > 768){
  //     $(".session-form").hide();
  //     $(".even-odd-market-form").hide();
  //     $(".enter-default-value").show();

  //     if(clicked_value > 0){

  //       $(".market-form").show();

  //       $("#coin_countity_bet").focus();
  //       $(".amt_field").removeAttr('disabled');
  //       $(".amt_field1").removeAttr('disabled');
  //       $("#coin_countity_bet").val('');
  //       var market = $(this).siblings(":first").text()
  //       var tr = $(this);
  //       var odds_type = $(this).attr('data-id')
  //       var runner_id = $(this).attr('runner-id')
  //       var match_id = $(this).attr('match-id')
  //       var market_id = $(this).attr('market-id')
  //       var odd_val = $(this).attr('odd-val')
  //       var heroic_market_type = $(this).attr('heroic-market-type')
  //       var odds_type_lable;
  //       if(odds_type == "LAGAI"){
  //         odds_type_lable = I18n.t("lagai")
  //       }
  //       else{
  //         odds_type_lable = I18n.t("khai")
  //       }
  //       $('#match_id').val(match_id);
  //       $("#odds_type").val(odds_type);
  //       $('#runner_id').val(runner_id);
  //       $('#odds_val').val(updated_clicked_value);
  //       $('#match_winner_heroic_market_type').val(heroic_market_type);
  //       $('#market_id').val(market_id);
  //       $('#odds').empty();
  //       $('#market-nm').empty();
  //       $('#odds').html($('#odds').html()+clicked_value+  '&nbsp;&nbsp;('+odds_type_lable+')');
  //       $('#market-nm').html($('#market-nm').html()+market);
  //     }else{
  //       $(".market-form").hide();
  //       $(".enter-default-value").hide();
  //     }
  //   }else{
  //     $(".market-form").remove();
  //     $(".session-form").remove();
  //     $(".even-odd-market-form").remove();
  //     $(".numeric-keyboard-session").hide();
  //     $(".numeric-keyboard-market-even-odd").hide();
  //     $(".numeric-keyboard-market").show();


  //     if(clicked_value > 0){
  //       $(".amt_field").removeAttr('disabled');
  //       $(".amt_field1").removeAttr('disabled');
  //       $("#quantity-market").val('');
  //       var market = $(this).siblings(":first").text()
  //       var tr = $(this);
  //       var odds_type = $(this).attr('data-id')
  //       var runner_id = $(this).attr('runner-id')
  //       var match_id = $(this).attr('match-id')
  //       var market_id = $(this).attr('market-id')
  //       var odd_val = $(this).attr('odd-val')
  //       var heroic_market_type = $(this).attr('heroic-market-type')
  //        var odds_type_lable;
  //       if(odds_type == "LAGAI"){
  //         odds_type_lable = I18n.t("lagai")
  //       }
  //       else{
  //         odds_type_lable = I18n.t("khai")
  //       }
  //       $('#match_id').val(match_id);
  //       $("#odds_type").val(odds_type);
  //       $('#runner_id').val(runner_id);
  //       $('#mobile-keyboard-odds-val').empty();
  //       $('#mobile-keyboard-odds-val').val(updated_clicked_value);
  //       $('#market_id').val(market_id);
  //       $('#odds_val').val(updated_clicked_value);
  //       $('#match_winner_heroic_market_type').val(heroic_market_type);
  //       $('#mobile-keyboard-odds').empty();
  //       $('#mobile-keyboard-odds-type').empty();
  //       $('#mobile-keyboard-runner-name').empty();
  //       $('#mobile-keyboard-odds').html($('#mobile-keyboard-odds').html()+clicked_value);
  //       $('#mobile-keyboard-odds-type').html($('#mobile-keyboard-odds-type').html()+odds_type_lable);
  //       $('#mobile-keyboard-runner-name').html($('#mobile-keyboard-runner-name').html()+market);
  //     }else{
  //       $(".market-form").hide();
  //       $(".enter-default-value").hide();
  //     }
  //   }
  // });
  // // MarketTable close
  $('body').on('click', 'td.MarketTable', function(e) {
  // $('.MarketTable').click(function(e){
    var cell = $(e.target).get(0)
    var clicked_value = $(cell).html();
    var float_convert = parseFloat(clicked_value);
    // var add_val = float_convert + 1
    var updated_clicked_value = float_convert.toFixed(2)
    $(".enter-default-value").show();
    if(clicked_value > 0){
        $(".bet_records").hide()
        $(".market-form").show();
        $(".session-form").hide();
        $("#coin_countity_bet").focus();
        $(".amt_field").removeAttr('disabled');
        $(".amt_field1").removeAttr('disabled');
        $("#coin_countity_bet").val('');
        var market = $(this).siblings(":first").text()
        var tr = $(this);
        var odds_type = $(this).attr('data-id')
        var runner_id = $(this).attr('runner-id')
        var event_id = $(this).attr('event_id')
        var market_id = $(this).attr('market-id')
        var market_name = $(this).attr('market-name')
        var event_name = $(this).attr('event-name')
        // var odd_val = $(this).attr('odd-val')
        var heroic_market_type = $(this).attr('heroic-market-type')
        var odds_type_lable;

        $('#event_id').val(event_id);
        $("#odds_type").val(odds_type);
        $('#runner_id').val(runner_id);
        $('#market_rate').val(updated_clicked_value);
        $('#match_winner_heroic_market_type').val(heroic_market_type);
        $('#market_id').val(market_id);
        $('#market_name').val(market_name);
        $('#market_type').val(odds_type);
        $('#market_event_name').val(event_name);
        // $('#market_nm').text(market_name);
        // $('#market_rt').text(updated_clicked_value);
        $('#market_rt').empty();
        $('#market_nm').empty();
        $('#market_rt').html($('#market_rt').html()+clicked_value+  '&nbsp;&nbsp;('+odds_type+')');
        $('#market_nm').html($('#market_nm').html()+market);

    }else{
      $(".market-form").hide();
      $(".enter-default-value").hide();
      $(".bet_records").show();
    }
  });

});

  $('body').on('click', 'td.SessionTable', function(e) {

    var cell = $(e.target).get(0)
    var clicked_value = $(cell).html();
    $(".market-form").hide();
    $(".even-odd-market-form").hide();
    $(".enter-default-value").show();
    if (clicked_value > 0) {
      $(".bet_records").hide()
      $(".session-form").show();
      $("#coin_countity_session").focus();
      $(".amt_field").removeAttr('disabled');
      $(".amt_field1").removeAttr('disabled');
      $(".amt_field_even_odd").removeAttr('disabled');
      $("#coin_countity_session").val('');
      var session = $(this).siblings(":first").text()
      var tr = $(this);
      var market_type = $(this).attr('data-id')
      var market_name = $(this).attr('market-name')
      var market_rate = $(this).attr('market-rate')
      var event_name = $(this).attr('event-name')
      var market_id = $(this).attr('market-id')
      var market_value = $(this).attr('market-value')

      $('#session_market_name').val(market_name);
      $('#session_market_type').val(market_value +'('+market_type+')');
      $('#session_market_rate').val(market_rate);
      $('#session_event_name').val(event_name);
      $('#session_market_id').val(market_id);

      $('#session_rt').empty();
      $('#session_nm').empty();
      $('#session_rt').html($('#session_rt').html()+market_value+  '&nbsp;&nbsp;('+market_type+')');
      $('#session_nm').html($('#session_nm').html()+market_name);
    } else {
      $(".session-form").hide();
      $(".enter-default-value").hide();
      $(".bet_records").show();
    }
  });

//   // CustomMarket start
//   $('body').on('click', 'td.CustomMarket', function(e) {
//     var cell = $(e.target).get(0)
//     var clicked_value = $(cell).html();
//     // console.log("odds_clicked_value =>",clicked_value);
//     var float_convert = parseFloat(clicked_value);
//     var add_val = float_convert + 1
//     var updated_clicked_value = add_val.toFixed(2)
//     // console.log("odds_updated_clicked_value =>",updated_clicked_value);

//     var win_size = $(document).width();

//     if(win_size > 768){
//       $(".session-form").hide();
//       $(".even-odd-market-form").hide();
//       $(".enter-default-value").show();

//       if(clicked_value > 0){

//         $(".market-form").show();
//         $('html,body').animate({scrollTop: $(".market-form").offset().top - 300}, 1000);
//         $("#coin_countity_bet").focus();
//         $(".amt_field").removeAttr('disabled');
//         $(".amt_field1").removeAttr('disabled');
//         $("#coin_countity_bet").val('');
//         var market = $(this).siblings(":first").text()
//         var tr = $(this);
//         var odds_type = $(this).attr('data-id')
//         var runner_id = $(this).attr('runner-id')
//         var match_id = $(this).attr('match-id')
//         var market_id = $(this).attr('market-id')
//         var odd_val = $(this).attr('odd-val')
//         var heroic_market_type = $(this).attr('heroic-market-type')
//         var odds_type_lable;
//         if(odds_type == "LAGAI"){
//           odds_type_lable = I18n.t("lagai")
//         }
//         else{
//           odds_type_lable = I18n.t("khai")
//         }
//         $('#match_id').val(match_id);
//         $("#odds_type").val(odds_type);
//         $('#runner_id').val(runner_id);
//         $('#odds_val').val(updated_clicked_value);
//         $('#match_winner_heroic_market_type').val(heroic_market_type);
//         $('#market_id').val(market_id);
//         $('#odds').empty();
//         $('#market-nm').empty();
//         $('#odds').html($('#odds').html()+clicked_value+  '&nbsp;&nbsp;('+odds_type_lable+')');
//         $('#market-nm').html($('#market-nm').html()+market);
//       }else{
//         $(".market-form").hide();
//         $(".enter-default-value").hide();
//       }
//     }else{
//       $(".market-form").remove();
//       $(".session-form").remove();
//       $(".even-odd-market-form").remove();
//       $(".numeric-keyboard-session").hide();
//       $(".numeric-keyboard-market-even-odd").hide();
//       $(".numeric-keyboard-market").show();

//       if(clicked_value > 0){
//         $(".amt_field").removeAttr('disabled');
//         $(".amt_field1").removeAttr('disabled');
//         $("#quantity-market").val('');
//         var market = $(this).siblings(":first").text()
//         var tr = $(this);
//         var odds_type = $(this).attr('data-id')
//         var runner_id = $(this).attr('runner-id')
//         var match_id = $(this).attr('match-id')
//         var market_id = $(this).attr('market-id')
//         var odd_val = $(this).attr('odd-val')
//         var heroic_market_type = $(this).attr('heroic-market-type')
//          var odds_type_lable;
//         if(odds_type == "LAGAI"){
//           odds_type_lable = I18n.t("lagai")
//         }
//         else{
//           odds_type_lable = I18n.t("khai")
//         }
//         $('#match_id').val(match_id);
//         $("#odds_type").val(odds_type);
//         $('#runner_id').val(runner_id);
//         $('#mobile-keyboard-odds-val').empty();
//         $('#mobile-keyboard-odds-val').val(updated_clicked_value);
//         $('#market_id').val(market_id);
//         $('#odds_val').val(updated_clicked_value);
//         $('#match_winner_heroic_market_type').val(heroic_market_type);
//         $('#mobile-keyboard-odds').empty();
//         $('#mobile-keyboard-odds-type').empty();
//         $('#mobile-keyboard-runner-name').empty();
//         $('#mobile-keyboard-odds').html($('#mobile-keyboard-odds').html()+clicked_value);
//         $('#mobile-keyboard-odds-type').html($('#mobile-keyboard-odds-type').html()+odds_type_lable);
//         $('#mobile-keyboard-runner-name').html($('#mobile-keyboard-runner-name').html()+market);
//       }else{
//         $(".market-form").hide();
//         $(".enter-default-value").hide();
//       }
//     }
//   });
//   // CustomMarket Close

//   // EVEN ODD MARKET CODE START
//   $('body').on('click', 'td.MarketEvenOddTable', function(e) {

//     var cell = $(e.target).get(0)
//     var clicked_value = $(cell).html();
//     // console.log("odds_clicked_value =>", clicked_value);
//     var float_convert = parseFloat(clicked_value);
//     var add_val = float_convert + 1
//     //var updated_clicked_value = add_val.toString();
//     var updated_clicked_value = add_val.toFixed(2)
//     // console.log("odds_updated_clicked_value =>", updated_clicked_value);


//     var win_size = $(document).width();

//     if (win_size > 768) {
//       $(".session-form").hide();
//       $(".market-form").hide();
//       $(".enter-default-value").show();

//       if (clicked_value > 0) {

//         $(".even-odd-market-form").show();

//         $("#coin_countity_even_odd").focus();
//         $(".amt_field").removeAttr('disabled');
//         $(".amt_field1").removeAttr('disabled');
//         $(".amt_field_even_odd").removeAttr('disabled');
//         $("#coin_countity_even_odd").val('');
//         var market = $(this).siblings(":first").text()
//         var tr = $(this);
//         var odds_type = $(this).attr('data-id')
//         var runner_id = $(this).attr('runner-id')
//         var match_id = $(this).attr('match-id')
//         var market_id = $(this).attr('market-id')
//         var odd_val = $(this).attr('odd-val')
//         var new_market = $(this).attr('market-name')
//         var heroic_market_type = $(this).attr('heroic-market-type')
//         var odds_type_lable;
//         if(odds_type == "Even"){
//           odds_type_lable = I18n.t("even")
//         }
//         else if( odds_type == "Odd" ){
//           odds_type_lable = I18n.t("odd")
//         }
//         else{
//           odds_type_lable = odds_type;
//         }
//         $('#even_odd_match_id').val(match_id);
//         $('#even_odd_runner_id').val(runner_id);

//         if (heroic_market_type == 'ending_digit') {
//             $('#even_odd_odds_val').val(clicked_value);
//         } else {
//             $('#even_odd_odds_val').val(updated_clicked_value);
//         }

//         $('#even_odd_market_id').val(market_id);
//         $('#even_odd_heroic_market_type').val(heroic_market_type);
//         $('#even_odd_odds').empty();
//         $('#even-odd-market-nm').empty();
//         $('#even_odd_odds').html($('#even_odd_odds').html() + clicked_value + '&nbsp;&nbsp;(' + odds_type_lable + ')');
//         $('#even-odd-market-nm').html($('#even-odd-market-nm').html() + new_market);
//       } else {
//         $(".even-odd-market-form").hide();
//         $(".enter-default-value").hide();
//       }
//     } else {
//       $(".market-form").remove();
//       $(".session-form").remove();
//       $(".even-odd-market-form").remove();
//       $(".numeric-keyboard-session").hide();
//       $(".numeric-keyboard-market").hide();
//       $(".numeric-keyboard-market-even-odd").show();

//       if (clicked_value > 0) {
//         $(".amt_field").removeAttr('disabled');
//         $(".amt_field_even_odd").removeAttr('disabled');
//         $(".amt_field1").removeAttr('disabled');
//         $("#quantity-even-odd").val('');
//         var market = $(this).siblings(":first").text()
//         var tr = $(this);
//         var odds_type = $(this).attr('data-id')
//         var runner_id = $(this).attr('runner-id')
//         var match_id = $(this).attr('match-id')
//         var market_id = $(this).attr('market-id')
//         var odd_val = $(this).attr('odd-val')
//         var new_market = $(this).attr('market-name')
//         var heroic_market_type = $(this).attr('heroic-market-type')
//         var odds_type_lable;
//         if(odds_type == "Even"){
//           odds_type_lable = I18n.t("even")
//         }
//         else if( odds_type == "Odd" ){
//           odds_type_lable = I18n.t("odd")
//         }
//         else{
//           odds_type_lable = odds_type;
//         }
//         $('#even_odd_match_id').val(match_id);
//         $('#even_odd_runner_id').val(runner_id);
//         $('#mobile-keyboard-odds-val').empty();

//         if (heroic_market_type == 'ending_digit') {
//             $('#even_odd_odds_val').val(clicked_value);
//             $('#mobile-keyboard-odds-val').val(clicked_value);
//         } else {
//             $('#even_odd_odds_val').val(updated_clicked_value);
//             $('#mobile-keyboard-odds-val').val(updated_clicked_value);
//         }

//         $('#even_odd_market_id').val(market_id);
//         $('#even_odd_heroic_market_type').val(heroic_market_type);
//         $('#mobile-keyboard-odds-even-odd').empty();
//         $('#mobile-keyboard-odds-type-even-odd').empty();
//         $('#mobile-keyboard-runner-name-even-odd').empty();
//         $('#mobile-keyboard-odds-even-odd').html($('#mobile-keyboard-odds-even-odd').html() + clicked_value);
//         $('#mobile-keyboard-odds-type-even-odd').html($('#mobile-keyboard-odds-type-even-odd').html() + odds_type_lable);
//         $('#mobile-keyboard-runner-name-even-odd').html($('#mobile-keyboard-runner-name-even-odd').html() + new_market);
//       } else {
//         $(".even-odd-market-form").hide();
//         $(".enter-default-value").hide();
//       }
//     }
//   });
//   // EVEN ODD MARKET CODE END

//   $('body').on('click', 'td.SessionTable', function(e) {

//     var cell = $(e.target).get(0)
//     var clicked_value = $(cell).html();

//     var win_size = $(document).width();

//     if (win_size > 768) {

//       $(".market-form").hide();
//       $(".even-odd-market-form").hide();
//       $(".enter-default-value").show();

//       if (clicked_value > 0) {

//         $(".session-form").show();

//         $("#coin_countity_session").focus();
//         $(".amt_field").removeAttr('disabled');
//         $(".amt_field1").removeAttr('disabled');
//         $("#coin_countity_session").val('');
//         var session = $(this).siblings(":first").text()
//         var tr = $(this);
//         var runns_type = $(this).attr('data-id')
//         var match_id = $(this).attr('match-id')
//         var session_id = $(this).attr('session-id')
//         var session_run_id = $(this).attr('session-run-id')
//         var runns_type_label;
//         if (runns_type == 'NO') {
//           var session_rate = $(this).closest('tr').find('td:eq(2)').text();
//           var float_convert = parseFloat(session_rate);
//           var add_val = float_convert + 1
//           var updated_clicked_value = add_val.toFixed(2)
//           // console.log("session_odds_updated_clicked_value =>", updated_clicked_value);
//           runns_type_label = I18n.t("no_run")
//         }
//         if (runns_type == 'YES') {
//           var session_rate = $(this).closest('tr').find('td:eq(4)').text();
//           var float_convert = parseFloat(session_rate);
//           var add_val = float_convert + 1
//           var updated_clicked_value = add_val.toFixed(2)
//           // console.log("session_odds_updated_clicked_value =>", updated_clicked_value);
//           runns_type_label = I18n.t("yes_run")
//         }
//         $('#session_rate').val(updated_clicked_value)
//         $('#action').val(runns_type)
//         $('#session_run_id').val(session_run_id);
//         $('#session_id').val(session_id);
//         $('#s_match_id').val(match_id);
//         $('#runs').val(clicked_value);
//         $("#runns_type").val(runns_type);
//         $('#runns').empty();
//         $('#session-nm').empty();
//         $('#runns').html($('#runns').html() + clicked_value + '&nbsp;&nbsp;(' + runns_type_label + ')');
//         $('#session-nm').html($('#session-nm').html() + session);
//       } else {
//         $(".session-form").hide();
//         $(".enter-default-value").hide();
//       }
//     } else {
//       $(".market-form").remove();
//       $(".even-odd-market-form").remove();
//       $(".session-form").remove();
//       $(".numeric-keyboard-market").hide();
//       $(".numeric-keyboard-market-even-odd");
//       $(".numeric-keyboard-session").show();


//       if (clicked_value > 0) {
//         $(".amt_field").removeAttr('disabled');
//         $(".amt_field1").removeAttr('disabled');
//         $(".amt_field_even_odd").removeAttr('disabled');
//         $(".quantity-session").val('');
//         var session = $(this).siblings(":first").text()
//         var tr = $(this);
//         var runns_type = $(this).attr('data-id')
//         var match_id = $(this).attr('match-id')
//         var session_id = $(this).attr('session-id')
//         var session_run_id = $(this).attr('session-run-id')
//         var runns_type_label;
//         if (runns_type == 'NO') {
//           var session_rate = $(this).closest('tr').find('td:eq(2)').text();
//           var float_convert = parseFloat(session_rate);
//           var add_val = float_convert + 1
//           var updated_clicked_value = add_val.toFixed(2)
//           // console.log("session_odds_updated_clicked_value =>", updated_clicked_value);
//           runns_type_label = I18n.t("no_run")
//         }
//         if (runns_type == 'YES') {
//           var session_rate = $(this).closest('tr').find('td:eq(4)').text();
//           var float_convert = parseFloat(session_rate);
//           var add_val = float_convert + 1
//           var updated_clicked_value = add_val.toFixed(2)
//           // console.log("session_odds_updated_clicked_value =>", updated_clicked_value);
//           runns_type_label = I18n.t("yes_run")
//         }
//         $('#session_rate').val(updated_clicked_value)
//         $('#action').val(runns_type)
//         $('#session_run_id').val(session_run_id);
//         $('#session_id').val(session_id);
//         $('#s_match_id').val(match_id);
//         $('#runs').val(clicked_value);
//         $("#runns_type").val(runns_type);
//         $('#mobile-keyboard-session-type').empty();
//         $('#mobile-keyboard-session-runner-name').empty();
//         $('#mobile-keyboard-session-odd').empty();
//         $('#mobile-keyboard-session-type').html($('#mobile-keyboard-session-type').html() + runns_type_label);
//         $('#mobile-keyboard-session-runner-name').html($('#mobile-keyboard-session-runner-name').html() + session);
//         $('#mobile-keyboard-session-odd').html($('#mobile-keyboard-session-odd').html() + session_rate);
//       } else {
//         $(".session-form").hide();
//         $(".enter-default-value").hide();
//       }
//     }
//   });

//   // ENDING DIGIT MARKET CODE START
//   $('.MarketEndingDigitTable').click(function(e){
//     var cell = $(e.target).get(0)
//     var clicked_value = $(".ending_digit_odds_val").html();
//     // console.log("odds_clicked_value =>",clicked_value);
//     var float_convert = parseFloat(clicked_value);
//     var add_val = float_convert + 1
//     var updated_clicked_value = add_val.toFixed(2)
//     // console.log("odds_updated_clicked_value =>",updated_clicked_value);

//     var win_size = $(document).width();

//     if(win_size > 768){
//       $(".session-form").hide();
//       $(".market-form").hide();
//       $(".enter-default-value").show();

//       if(clicked_value > 0){
//         $(".even-odd-market-form").show();
//         $("#coin_countity_bet").focus();
//         $(".amt_field").removeAttr('disabled');
//         $(".amt_field1").removeAttr('disabled');
//         $(".amt_field_even_odd").removeAttr('disabled');
//         $("#coin_countity_bet").val('');
//         var market = $(this).siblings(":first").text()
//         var tr = $(this);
//         var odds_type = $(this).attr('data-id')
//         var runner_id = $(this).attr('runner-id')
//         var match_id = $(this).attr('match-id')
//         var market_id = $(this).attr('market-id')
//         var odd_val = $(this).attr('odd-val')
//         var new_market = $(this).attr('market-name')
//         var heroic_market_type = $(this).attr('heroic-market-type')
//         $('#even_odd_match_id').val(match_id);
//         $('#even_odd_runner_id').val(runner_id);
//         $('#even_odd_odds_val').val(updated_clicked_value);
//         $('#even_odd_market_id').val(market_id);
//         $('#even_odd_heroic_market_type').val(heroic_market_type);
//         $('#even_odd_odds').empty();
//         $('#even-odd-market-nm').empty();
//         $('#even_odd_odds').html($('#even_odd_odds').html()+clicked_value+  '&nbsp;&nbsp;('+odds_type+')');
//         $('#even-odd-market-nm').html($('#even-odd-market-nm').html()+new_market);
//       }else{
//         $(".even-odd-market-form").hide();
//         $(".enter-default-value").hide();
//       }
//     }else{
//       $(".market-form").remove();
//       $(".session-form").remove();
//       $(".even-odd-market-form").remove();
//       $(".numeric-keyboard-session").hide();
//       $(".numeric-keyboard-market").hide();
//       $(".numeric-keyboard-market-even-odd").show();

//       if(clicked_value > 0){
//         $(".amt_field").removeAttr('disabled');
//         $(".amt_field_even_odd").removeAttr('disabled');
//         $(".amt_field1").removeAttr('disabled');
//         $("#quantity-even-odd").val('');
//         var market = $(this).siblings(":first").text()
//         var tr = $(this);
//         var odds_type = $(this).attr('data-id')
//         var runner_id = $(this).attr('runner-id')
//         var match_id = $(this).attr('match-id')
//         var market_id = $(this).attr('market-id')
//         var odd_val = $(this).attr('odd-val')
//         var new_market = $(this).attr('market-name')
//         var heroic_market_type = $(this).attr('heroic-market-type')
//         $('#even_odd_match_id').val(match_id);
//         $('#even_odd_runner_id').val(runner_id);
//         $('#mobile-keyboard-odds-val').empty();
//         $('#mobile-keyboard-odds-val').val(updated_clicked_value);
//         $('#even_odd_market_id').val(market_id);
//         $('#even_odd_odds_val').val(updated_clicked_value);
//         $('#even_odd_heroic_market_type').val(heroic_market_type);
//         $('#mobile-keyboard-odds-even-odd').empty();
//         $('#mobile-keyboard-odds-type-even-odd').empty();
//         $('#mobile-keyboard-runner-name-even-odd').empty();
//         $('#mobile-keyboard-odds-even-odd').html($('#mobile-keyboard-odds-even-odd').html()+clicked_value);
//         $('#mobile-keyboard-odds-type-even-odd').html($('#mobile-keyboard-odds-type-even-odd').html()+odds_type);
//         $('#mobile-keyboard-runner-name-even-odd').html($('#mobile-keyboard-runner-name-even-odd').html()+new_market);
//       }else{
//         $(".even-odd-market-form").hide();
//         $(".enter-default-value").hide();
//       }
//     }
//   });
//   // ENDING DIGIT MARKET CODE END

  $(".place-bet-done-btn").click(function(){
    $(".place-bet-buttons-div").hide();
  });

  $('body').on('click', '.default-value-btn', function(e) {
  // $(".default-value-btn").click(function(){
    var entred_market_amt = $(".amt_field1").val()
    var entred_session_amt = $(".amt_field").val()
    var entred_even_odd_market_amt = $(".amt_field_even_odd").val()
    var enter_default_value = $(this).attr('amt-value')
     if(enter_default_value == 'clear'){
        $(".amt_field1").val('');
        $(".amt_field").val('');
        $(".amt_field_even_odd").val('');
     }else{
      $(".amt_field1").val(enter_default_value);
      $(".amt_field").val(enter_default_value);
      $(".amt_field_even_odd").val(enter_default_value);
    }
  });

//   var win_size = $(document).width();
//   if(win_size > 768){
//     $(".MarketTable").click(function() {
//       $('html,body').animate({
//           scrollTop: $(".market-form").offset().top - 300},
//           1000);
//     });
//     $('body').on('click', 'td.MarketEvenOddTable', function(){
//       $('html,body').animate({
//           scrollTop: $(".even-odd-market-form").offset().top - 300},
//           1000);
//     });
//     $('body').on('click', 'td.SessionTable', function(){
//       $('html,body').animate({
//           scrollTop: $(".session-form").offset().top - 300},
//           1000);
//     });
//   }
//   // });

//   $(function() {
//      $(document).keyup(function(e) {
//       var entred_amt = $(".amt_field_even_odd").val().length;
//       // console.log('entred_amt=>',entred_amt);
//       if( entred_amt === 0 ) {
//          return;
//       }

//       if (e.keyCode == 13){
//         $(".amt_field_even_odd").attr('disabled','disabled');
//         $("body").focus();
//       }
//     });
//   });

//   $(function() {
//     $(document).keyup(function(e) {
//       var entred_amt = $(".amt_field1").val().length;
//       // console.log('entred_amt=>',entred_amt);
//       if( entred_amt === 0 ) {
//         return;
//       }
//       if (e.keyCode == 13){
//         $(".amt_field1").attr('disabled','disabled');
//         $("body").focus();
//       }
//     });
//   });




//   $('#back').click(function() {
//     $('#quantity').val(
//       function(index, value) {
//         return value.substr(0, value.length - 1);
//       });
//   });

//   $('#back-even-odd').click(function() {
//     $('#quantity-even-odd').val(
//       function(index, value) {
//         return value.substr(0, value.length - 1);
//       });
//   });

//   $('.open-keyboard').click(function() {
//     if(!$(this).hasClass('close-status')){
//       $('.numeric-keypad-main-div').slideDown();
//       $('.overlay-div').show();
//     }
//   });

//   $(document).on('click','.open-keyboard-session', function(){
//      if(!$(this).hasClass('close-status')){
//        $('.numeric-keypad-main-div-session').slideDown();
//        $('.overlay-div').show();
//      }
//   });

//   $(document).on('click','.open-keyboard-even-odd', function(){
//       if(!$(this).hasClass('close-status')){
//         $('.numeric-keypad-main-div-even-odd').slideDown();
//         $('.overlay-div').show();
//       }
//   });

//   $(document).on('click','.open-keyboard-custom', function(){
//       if(!$(this).hasClass('close-status')){
//         $('.numeric-keypad-main-div').slideDown();
//         $('.overlay-div').show();
//       }
//   });

//   $('.overlay-div').click(function(){
//     $('.numeric-keypad-main-div').slideUp();
//     $('.numeric-keypad-main-div-even-odd').slideUp();
//     $('.numeric-keypad-main-div-session').slideUp();
//     $('.overlay-div').hide();
//     $(document).getElementById("quantity").value = "";
//     $(document).getElementById("quantity-even-odd").value = "";
//     $(document).getElementById("quantity-session").value = "";
//   });

//   $('#close-numeric-keyboard').click(function(){
//     $('.numeric-keypad-main-div').slideUp();
//     $('.overlay-div').hide();
//     $(document).getElementById("quantity").value = "";
//   });

//   $('#close-numeric-keyboard-even-odd').click(function(){
//     $('.numeric-keypad-main-div-even-odd').slideUp();
//     $('.overlay-div').hide();
//     $(document).getElementById("quantity-even-odd").value = "";
//   });

//   $('#close-numeric-keyboard-session').click(function(){
//     $('.numeric-keypad-main-div-session').slideUp();
//     $('.overlay-div').hide();
//     $(document).getElementById("quantity-session").value = "";
//   });

//   $('#cancel-numeric-keyboard').click(function(){
//     $('.numeric-keypad-main-div').slideUp();
//     $('.overlay-div').hide();
//     $(document).getElementById("quantity").value = "";
//   });

//   $('#cancel-numeric-keyboard-even-odd').click(function(){
//     $('.numeric-keypad-main-div-even-odd').slideUp();
//     $('.overlay-div').hide();
//     $(document).getElementById("quantity-even-odd").value = "";
//   });

//   $('#cancel-numeric-keyboard-session').click(function(){
//     $('.numeric-keypad-main-div-session').slideUp();
//     $('.overlay-div').hide();
//     $(document).getElementsByClassName("quantity-session").value = "";
//   });

//   $('.toggle-sports').click(function(){
//       $('.sport-switch').slideToggle(200);
//       $('.down-menu-arrow').toggleClass('flip');
//   });

//   $('.notifications').click(function(){
//     $('#alert-status').slideToggle(200);
//   });


//   $('.close-num-keyboard, .clear-all').click(function(){
//     document.getElementById("quantity").value = "";
//   });

//   $('#back2').click(function() {
//       $('#quantity-session').val(
//         function(index, value) {
//           return value.substr(0, value.length - 1);
//     });
//   });

//   var placing_bet = false;
//   $('.input-coin').on('submit', function() {
//     var but = $(this).find('[type="submit"]')
//     if (placing_bet == true){
//       but.removeClass('sending').blur();
//       return false;
//     }
//     placing_bet = true;
//     but.toggleClass('sending').blur();
//     return true;
//   });

// });


// function setMarket(market){
//   closeMarket(market);
//   if(market.match_id == match_id_show13){
//     var status = market.status
//     if(status =='OPEN'){

//       var market_type = market.heroic_market_type;

//       open_runners = [];
//       favorite_runner = null;
//       favorite_odds = 99999999;
//       for(i = 0; i < market.runners.length; i++){
//         try{
//           runner = market.runners[i];

//           var betfair_selection_id = runner.sid;
//           var lay_number = runner.l;
//           var back_number = runner.b;
//           var can_back = runner.can_back;
//           var can_lay = runner.can_lay;

//           var back_val = null;
//           var lay_val = null;

//           if (market_type == 'ending_digit') {
//             back_val = (back_number - 0).toFixed(2);
//             lay_val = (lay_number - 0).toFixed(2);
//           }
//           else if(market_type == null) {
//             back_val = (back_number - 1).toFixed(2);
//             lay_val = (lay_number - 1).toFixed(2);
//           }
//           else {
//             back_val = (back_number - 1).toFixed(2);
//             lay_val = (lay_number - 1).toFixed(2);
//           }

//           back_box = document.getElementById(market.betfair_market_id + "_back_" + runner.sid);
//           lay_box = document.getElementById(market.betfair_market_id + "_lay_" + runner.sid);
//           if(can_back == true ){
//             back_box.innerHTML = back_val;
//             back_box.classList.remove("close-status");
//             if (back_val < favorite_odds){
//               favorite_odds = back_val;
//               favorite_runner = runner;
//             }
//           }

//           if(can_lay == true ){
//             lay_box.innerHTML= lay_val
//             lay_box.classList.remove("close-status");
//             if (lay_val < favorite_odds){
//               favorite_odds = lay_val;
//               favorite_runner = runner;
//             }
//           }

//         }
//         catch(e){
//         }
//       }

//       if (favorite_runner != null){
//         setColorOfMarketRunner(favorite_runner,"#84C341");
//       }
//     }
//     setBetStatus();
//   }
// }


// function setBetStatus(){

//   var bet_status_open = '';
//   is_any_bet_open = isAnyBetOpen()
//   $("#bet-status").empty();
//   width =  $('body').width();

//   if (width > 1200){
//     if(is_any_bet_open){
//       bet_status_open = I18n.t("bet_open");
//       // console.log("event_table_" + match_id_show13);
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "40px";
//     }
//     else{
//       bet_status_open = I18n.t("bet_closed");
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "40px";
//     }
//   }
//   else if (width < 1200 && width > 980){
//     if(is_any_bet_open){
//       bet_status_open = I18n.t("bet_open");
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "35px";
//     }
//     else{
//       bet_status_open = I18n.t("bet_closed");
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "35px";
//     }
//   }
//   else if (width < 980 && width > 768){
//     if(is_any_bet_open){
//       bet_status_open = I18n.t("bet_open");
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "35px";
//     }
//     else{
//       bet_status_open = I18n.t("bet_closed")
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "35px";
//     }
//   }
//   else if (width < 768 && width > 600){
//     if(is_any_bet_open){
//       bet_status_open = I18n.t("bet_open");
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "30px";
//     }
//     else{
//       bet_status_open = I18n.t("bet_closed")
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "30px";
//     }
//   }
//   else if (width < 600 && width > 480){

//     if(is_any_bet_open){
//       bet_status_open = I18n.t("bet_open");
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "26px";
//     }
//     else{
//       bet_status_open = I18n.t("bet_closed")
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "26px";
//     }
//   }
//   else if (width < 480 && width > 420){

//     if(is_any_bet_open){
//       bet_status_open = I18n.t("bet_open");
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "20px";
//     }
//     else{
//       bet_status_open = I18n.t("bet_closed")
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "20px";
//     }
//   }
//   else if (width < 420){

//     if(is_any_bet_open){
//       bet_status_open = I18n.t("bet_open");
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "20px";
//     }
//     else{
//       bet_status_open = I18n.t("bet_closed")
//       document.getElementById("event_table_" + match_id_show13).style.fontSize = "20px";
//     }
//   }


//   document.getElementById('event_table_' + match_id_show13).innerHTML = bet_status_open;
// }

// function isAnyBetOpen(){
//   is_any_bet_open = false;
//   $('[data-column="back"]').each(function (idx, el) {
//    is_bet_closed = el.classList.contains("close-status");
//    if (!is_bet_closed){
//      is_any_bet_open = true;
//    }
//   });

//   $('[data-column="lay"]').each(function (idx, el) {
//    is_bet_closed = el.classList.contains("close-status");
//    if (!is_bet_closed){
//      is_any_bet_open = true;
//    }
//   });

//    $('[data-column="no_runs"]').each(function (idx, el) {
//    is_bet_closed = el.classList.contains("close-status");
//    if (!is_bet_closed){
//      is_any_bet_open = true;
//    }
//   });

//   $('[data-column="yes_runs"]').each(function (idx, el) {
//    is_bet_closed = el.classList.contains("close-status");
//    if (!is_bet_closed){
//      is_any_bet_open = true;
//    }
//   });

//   return is_any_bet_open;
// }

// function set_event_text(current_event){
//   width =  $('body').width();
//   new_event = "";

//   if(current_event == "Dot"){
//     new_event = I18n.t("no_runs")
//   }
//   if(current_event == "1"){
//     new_event = "1"
//   }
//   if(current_event == "2"){
//     new_event ="2"
//   }
//   if(current_event == "3"){
//     new_event = "3"
//   }
//   if(current_event == "4"){
//     new_event = "4"
//   }
//   if(current_event == "5"){
//     new_event = "5"
//   }
//   if(current_event == "6"){
//     new_event = "6"
//   }
//   if(current_event == "Wicket"){
//     new_event = I18n.t("out")
//   }
//   if(current_event == "Dot"){
//     new_event = I18n.t("no_runs")
//     if (width < 420){
//       new_event = I18n.t("no_run1")
//     }
//   }
//   if(current_event == "Wicket1"){
//     new_event = I18n.t("out") + ' <i class="fa fa-plus" aria-hidden="true"></i> 1'
//     if (width < 480){
//       new_event = I18n.t("out") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>1'
//     }
//     else if (width < 420){
//       new_event =  '<br><i class="fa fa-plus" aria-hidden="true"></i><br>1'
//     }
//   }
//   if(current_event == "Wicket1"){
//     new_event = I18n.t("out") + ' <i class="fa fa-plus" aria-hidden="true"></i> 1'
//     if (width < 420){
//       new_event = I18n.t("out") +'<br><i class="fa fa-plus" aria-hidden="true"></i><br>1'
//     }
//   }

//   if(current_event == "Wicket2"){
//     new_event = I18n.t("out") + ' <i class="fa fa-plus" aria-hidden="true"></i> 2'
//      if (width < 480){
//       new_event = I18n.t("out") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>2'
//     }
//     else if (width < 420){
//       new_event = I18n.t("out") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>2'
//     }
//   }
//   if(current_event == "Wicket2"){
//     new_event = I18n.t("out") + ' <i class="fa fa-plus" aria-hidden="true"></i> 2'
//      if (width < 420){
//       new_event = I18n.t("out") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>2'
//     }
//   }

//   if(current_event == "Wicket3"){
//     new_event = I18n.t("out") + ' <i class="fa fa-plus" aria-hidden="true"></i> 3'
//     if (width < 480){
//       new_event = I18n.t("out") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>3'
//     }
//   }
//   if(current_event == "Wicket3"){
//     new_event = I18n.t("out") + ' <i class="fa fa-plus" aria-hidden="true"></i> 3'
//     if (width < 420){
//       new_event = I18n.t("out") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>3'
//     }
//   }
//   if(current_event == "Wide+Wicket"){
//     new_event = I18n.t("wide_out")
//     if (width < 480){
//       new_event = I18n.t("wide_out_480")
//     }
//     else if (width < 420){
//       new_event = I18n.t("wide_out_420")
//     }
//   }
//   if(current_event == "Wide+Wicket"){
//     new_event = I18n.t("wide_out")
//     if (width < 420){
//       new_event = I18n.t("wide_out_420")
//     }
//   }

//   if(current_event == "Wide"){
//     new_event = I18n.t("wide")
//   }
//   if(current_event == "Wide1"){
//     new_event = I18n.t("wide") + ' <i class="fa fa-plus" aria-hidden="true"></i> 1'
//     if (width < 480){
//       new_event = I18n.t("wide") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>1'
//     }
//   }
//   if(current_event == "Wide1"){
//     new_event = I18n.t("wide") + ' <i class="fa fa-plus" aria-hidden="true"></i> 1'
//     if (width < 420){
//       new_event = I18n.t("wide") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>1'
//     }
//   }

//   if(current_event == "Wide2"){
//     new_event = I18n.t("wide") + ' <i class="fa fa-plus" aria-hidden="true"></i> 2'
//    if (width < 480){
//       new_event = I18n.t("wide") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>2'
//     }
//   }
//   if(current_event == "Wide2"){
//     new_event = I18n.t("wide") + ' <i class="fa fa-plus" aria-hidden="true"></i> 2'
//    if (width < 420){
//       new_event = I18n.t("wide") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>2'
//     }
//   }

//   if(current_event == "Wide3"){
//     new_event = I18n.t("wide") + ' <i class="fa fa-plus" aria-hidden="true"></i> 3'
//     if (width < 480){
//       new_event = I18n.t("wide") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>3'
//     }
//   }
//   if(current_event == "Wide3"){
//     new_event = I18n.t("wide") + ' <i class="fa fa-plus" aria-hidden="true"></i> 3'
//     if (width < 420){
//       new_event = I18n.t("wide") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>3'
//     }
//   }

//   if(current_event == "Wide4"){
//     new_event = I18n.t("wide") + ' <i class="fa fa-plus" aria-hidden="true"></i> 4'
//     if (width < 480){
//       new_event = I18n.t("wide") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>4'
//     }
//   }
//   if(current_event == "Wide4"){
//     new_event = I18n.t("wide") + ' <i class="fa fa-plus" aria-hidden="true"></i> 4'
//     if (width < 420){
//       new_event = I18n.t("wide") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>4'
//     }
//   }

//   if(current_event == "No Ball"){
//     new_event = I18n.t("no_ball")
//   }
//   if(current_event == "NB1"){
//     new_event = I18n.t("no_ball") + ' <i class="fa fa-plus" aria-hidden="true"></i> 1'
//     if (width < 480){
//       new_event = I18n.t("no_ball") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>1'
//     }
//   }
//   if(current_event == "NB1"){
//     new_event = I18n.t("no_ball") + ' <i class="fa fa-plus" aria-hidden="true"></i> 1'
//     if (width < 420){
//       new_event = I18n.t("no_ball") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>1'
//     }
//   }

//   if(current_event == "NB2"){
//     new_event = I18n.t("no_ball") + ' <i class="fa fa-plus" aria-hidden="true"></i> 2'
//     if (width < 480){
//       new_event = I18n.t("no_ball") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>2'
//     }
//   }
//   if(current_event == "NB2"){
//     new_event = I18n.t("no_ball") + ' <i class="fa fa-plus" aria-hidden="true"></i> 2'
//     if (width < 420){
//       new_event = I18n.t("no_ball") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>2'
//     }
//   }

//   if(current_event == "NB3"){
//     new_event = I18n.t("no_ball") + ' <i class="fa fa-plus" aria-hidden="true"></i> 3'
//     if (width < 480){
//       new_event = I18n.t("no_ball") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>3'
//     }
//   }
//   if(current_event == "NB3"){
//     new_event = I18n.t("no_ball") + ' <i class="fa fa-plus" aria-hidden="true"></i> 3'
//     if (width < 420){
//       new_event = I18n.t("no_ball") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>3'
//     }
//   }

//   if(current_event == "NB4"){
//     new_event = I18n.t("no_ball") + ' <i class="fa fa-plus" aria-hidden="true"></i> 4'
//     if (width < 480){
//       new_event = I18n.t("no_ball") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>4'
//     }
//   }
//   if(current_event == "NB4"){
//     new_event = I18n.t("no_ball") + ' <i class="fa fa-plus" aria-hidden="true"></i> 4'
//     if (width < 420){
//       new_event = I18n.t("no_ball") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>4'
//     }
//   }

//   if(current_event == "NB5"){
//     new_event = I18n.t("no_ball") + ' <i class="fa fa-plus" aria-hidden="true"></i> 5'
//     if (width < 480){
//       new_event = I18n.t("no_ball") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>5'
//     }
//   }
//   if(current_event == "NB5"){
//     new_event = I18n.t("no_ball") + ' <i class="fa fa-plus" aria-hidden="true"></i> 5'
//     if (width < 420){
//       new_event = I18n.t("no_ball") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>5'
//     }
//   }

//   if(current_event == "NB6"){
//     new_event = I18n.t("no_ball") + ' <i class="fa fa-plus" aria-hidden="true"></i> 6'
//     if (width < 480){
//       new_event = I18n.t("no_ball") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>6'
//     }
//   }
//   if(current_event == "NB6"){
//     new_event = I18n.t("no_ball") + ' <i class="fa fa-plus" aria-hidden="true"></i> 6'
//     if (width < 420){
//       new_event = I18n.t("no_ball") + '<br><i class="fa fa-plus" aria-hidden="true"></i><br>6'
//     }
//   }
//   if(current_event == "ball_start"){
//     new_event = I18n.t("ball_start")
//   }
//   if(current_event == "third_umpire"){
//     new_event = I18n.t("third_umpire")
//   }
//   if(current_event == "free_hit"){
//     new_event = I18n.t("free_hit")
//   }
//   if(current_event == "not_out"){
//     new_event = I18n.t("not_out");
//   }
//   if(current_event == "player_injured"){
//     new_event = I18n.t("player_injured");
//   }
//   document.getElementById('event_table_' + match_id_show13).innerHTML = new_event  ;

// }

// function set_event_font_size(current_event){
//   width =  $('body').width();

//   if( width  < 420){
//     font_size = "35px";
//     line_height = "22px";
//     padding = "0px";
//     if(current_event == "Dot"){
//       font_size = "20px";
//       line_height = "22px";
//     }
//     if(current_event == "1"){
//       font_size = "40px";
//       line_height = "22px";
//     }
//     if(current_event == "2"){
//       font_size = "40px";
//       line_height = "22px";
//     }
//     if(current_event == "3"){
//       font_size = "40px";
//       line_height = "22px";
//     }
//     if(current_event == "4"){
//       font_size = "40px";
//       line_height = "22px";
//     }
//     if(current_event == "5"){
//       font_size = "40px";
//       line_height = "22px";
//     }
//     if(current_event == "6"){
//       font_size = "40px";
//       line_height = "22px";
//     }
//     if(current_event == "Wicket"){
//       font_size = "22px";
//       line_height = "22px";
//     }
//     if(current_event == "Wicket1"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket2"){
//       font_size = "22px";
//       line_height = "22px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket3"){
//       font_size = "22px";
//       line_height = "22px";
//       padding = "5px";
//     }
//     if(current_event == "Wide+Wicket"){
//       font_size = "22px";
//       line_height = "22px";
//       padding = "5px";
//     }
//     if(current_event == "Wide"){
//       font_size = "22px";
//     }
//     if(current_event == "Wide1"){
//       font_size = "22px";
//       line_height = "22px";
//       padding = "5px";
//     }
//     if(current_event == "Wide2"){
//       font_size = "22px";
//       line_height = "22px";
//       padding = "5px";
//     }
//     if(current_event == "Wide3"){
//       font_size = "22px";
//       line_height = "22px";
//       padding = "5px";
//     }
//     if(current_event == "Wide4"){
//       font_size = "22px";
//       line_height = "22px";
//       padding = "5px";
//     }
//     if(current_event == "No Ball"){
//       font_size = "20px";
//     }
//     if(current_event == "NB1"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "NB2"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "NB3"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "NB4"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "NB5"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "NB6"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "ball_start"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "third_umpire"){
//       font_size = "15px";
//       line_height = "18px";
//       padding = "5px";
//     }
//     if(current_event == "free_hit"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "not_out"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "player_injured"){
//       font_size = "15px";
//       line_height = "18px";
//       padding = "5px";
//     }
//     $('.event').css("font-size", font_size);
//     $('.event').css("line-height", line_height);
//     $('.event').css("padding", padding);
//   }
//   else if( width  < 480){
//     font_size = "20px";
//     line_height = "22px";
//     padding = "0px";
//     if(current_event == "Dot"){
//       font_size = "18px";
//     }
//     if(current_event == "1"){
//       font_size = "45px";
//     }
//     if(current_event == "2"){
//       font_size = "45px";
//     }
//     if(current_event == "3"){
//       font_size = "45px";
//     }
//     if(current_event == "4"){
//       font_size = "45px";
//     }
//     if(current_event == "5"){
//       font_size = "45px";
//     }
//     if(current_event == "6"){
//       font_size = "45px";
//     }
//     if(current_event == "Wicket"){
//       font_size = "18px";
//     }
//     if(current_event == "Wicket1"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket2"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket3"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "Wide+Wicket"){
//       font_size = "18px";
//       line_height = "18px";
//       padding = "5px";
//     }
//     if(current_event == "Wide"){
//       font_size = "18px";
//     }
//     if(current_event == "Wide1"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "Wide2"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "Wide3"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "Wide4"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "No Ball"){
//       font_size = "18px";
//     }
//     if(current_event == "NB1"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "NB2"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "NB3"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "NB4"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "NB5"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "NB6"){
//       font_size = "18px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "ball_start"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "third_umpire"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "free_hit"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "not_out"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     if(current_event == "player_injured"){
//       font_size = "20px";
//       line_height = "20px";
//       padding = "5px";
//     }
//     $('.event').css("font-size", font_size);
//     $('.event').css("line-height", line_height);
//     $('.event').css("padding", padding);

//   }
//   else if( width  < 600){
//     font_size = "26px";
//     line_height = "26px";
//     padding = "0px";
//     if(current_event == "Dot"){
//       font_size = "25px";
//     }
//     if(current_event == "1"){
//       font_size = "50px";
//       line_height = "26px";
//     }
//     if(current_event == "2"){
//       font_size = "50px";
//       line_height = "26px";
//     }
//     if(current_event == "3"){
//       font_size = "50px";
//       line_height = "26px";
//     }
//     if(current_event == "4"){
//       font_size = "50px";
//       line_height = "26px";
//     }
//     if(current_event == "5"){
//       font_size = "50px";
//       line_height = "26px";
//     }
//     if(current_event == "6"){
//       font_size = "50px";
//       line_height = "26px";
//     }
//     if(current_event == "Wicket"){
//       font_size = "26px";
//       line_height = "26px";
//     }
//     if(current_event == "Wicket1"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket2"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket3"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "Wide+Wicket"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "Wide"){
//       font_size = "26px";
//     }
//     if(current_event == "Wide1"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "Wide2"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "Wide3"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "Wide4"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "No Ball"){
//       font_size = "25px";
//     }
//     if(current_event == "NB1"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "NB2"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "NB3"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "NB4"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "NB5"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "NB6"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "ball_start"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "third_umpire"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "free_hit"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "not_out"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "player_injured"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     $('.event').css("font-size", font_size);
//     $('.event').css("line-height", line_height);
//     $('.event').css("padding", padding);

//   }
//   else if( width  < 800){
//     font_size = "30px";
//     line_height = "30px";
//     padding = "0px";
//     if(current_event == "Dot"){
//       font_size = "30px";
//     }
//     if(current_event == "1"){
//       font_size = "50px";
//     }
//     if(current_event == "2"){
//       font_size = "50px";
//     }
//     if(current_event == "3"){
//       font_size = "50px";
//     }
//     if(current_event == "4"){
//       font_size = "50px";
//     }
//     if(current_event == "5"){
//       font_size = "50px";
//     }
//     if(current_event == "6"){
//       font_size = "50px";
//     }
//     if(current_event == "Wicket"){
//       font_size = "30px";
//     }
//     if(current_event == "Wicket1"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket2"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket3"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "Wide+Wicket"){
//       font_size = "28px";
//       line_height = "28px";
//       padding = "5px";
//     }
//     if(current_event == "Wide"){
//       font_size = "30px";
//     }
//     if(current_event == "Wide1"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "Wide2"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "Wide3"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "Wide4"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "No Ball"){
//       font_size = "30px";
//     }
//     if(current_event == "NB1"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "NB2"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "NB3"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "NB4"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "NB5"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "NB6"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "ball_start"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "third_umpire"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//      if(current_event == "player_injured"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     $('.event').css("font-size", font_size);
//     $('.event').css("line-height", line_height);
//     $('.event').css("padding", padding);

//   }
//   else if( width  < 980){
//     font_size = "28px";
//     line_height = "35px";
//     padding = "0px";
//     if(current_event == "Dot"){
//       font_size = "30px";
//     }
//     if(current_event == "1"){
//       font_size = "50px";
//     }
//     if(current_event == "2"){
//       font_size = "50px";
//     }
//     if(current_event == "3"){
//       font_size = "50px";
//     }
//     if(current_event == "4"){
//       font_size = "50px";
//     }
//     if(current_event == "5"){
//       font_size = "50px";
//     }
//     if(current_event == "6"){
//       font_size = "50px";
//     }
//     if(current_event == "Wicket"){
//       font_size = "35px";
//       line_height = "35px";
//     }
//     if(current_event == "Wicket1"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket2"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket3"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "Wide+Wicket"){
//       font_size = "28px";
//       line_height = "28px";
//       padding = "5px";
//     }
//     if(current_event == "Wide"){
//       font_size = "30px";
//     }
//     if(current_event == "Wide1"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "Wide2"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "Wide3"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "Wide4"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "No Ball"){
//       font_size = "30px";
//     }
//     if(current_event == "NB1"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "NB2"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "NB3"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "NB4"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "NB5"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "NB6"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "ball_start"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "third_umpire"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "player_injured"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     $('.event').css("font-size", font_size);
//     $('.event').css("line-height", line_height);
//     $('.event').css("padding", padding);

//   }
//   else if( width  < 1200){
//     font_size = "35px";
//     line_height = "35px";
//     padding = "0px";
//     if(current_event == "Dot"){
//       font_size = "30px";
//     }
//     if(current_event == "1"){
//       font_size = "55px";
//     }
//     if(current_event == "2"){
//       font_size = "55px";
//     }
//     if(current_event == "3"){
//       font_size = "55px";
//     }
//     if(current_event == "4"){
//       font_size = "55px";
//     }
//     if(current_event == "5"){
//       font_size = "55px";
//     }
//     if(current_event == "6"){
//       font_size = "55px";
//     }
//     if(current_event == "Wicket"){
//       font_size = "35px";
//     }
//     if(current_event == "Wicket1"){
//       font_size = "38px";
//       line_height = "35px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket2"){
//       font_size = "38px";
//       line_height = "35px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket3"){
//       font_size = "38px";
//       line_height = "35px";
//       padding = "5px";
//     }
//     if(current_event == "Wide+Wicket"){
//       font_size = "28px";
//       line_height = "28px";
//       padding = "5px";
//     }
//     if(current_event == "Wide"){
//       font_size = "38px";
//     }
//     if(current_event == "Wide1"){
//       font_size = "38px";
//       line_height = "35px";
//       padding = "5px";
//     }
//     if(current_event == "Wide2"){
//       font_size = "38px";
//       line_height = "35px";
//       padding = "5px";
//     }
//     if(current_event == "Wide3"){
//       font_size = "38px";
//       line_height = "35px";
//       padding = "5px";
//     }
//     if(current_event == "Wide4"){
//       font_size = "38px";
//       line_height = "35px";
//       padding = "5px";
//     }
//     if(current_event == "No Ball"){
//       font_size = "30px";
//     }
//     if(current_event == "NB1"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "NB2"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "NB3"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "NB4"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "NB5"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "NB6"){
//       font_size = "30px";
//       line_height = "30px";
//       padding = "5px";
//     }
//     if(current_event == "ball_start"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "third_umpire"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     if(current_event == "player_injured"){
//       font_size = "25px";
//       line_height = "25px";
//       padding = "5px";
//     }
//     $('.event').css("font-size", font_size);
//     $('.event').css("line-height", line_height);
//     $('.event').css("padding", padding);

//   }
//   else{
//     font_size = "40px";
//     line_height = "40px";
//     padding = "0px";
//     if(current_event == "Dot"){
//       font_size = "40px";
//     }
//     if(current_event == "1"){
//       font_size = "55px";
//     }
//     if(current_event == "2"){
//       font_size = "55px";
//     }
//     if(current_event == "3"){
//       font_size = "55px";
//     }
//     if(current_event == "4"){
//       font_size = "55px";
//     }
//     if(current_event == "5"){
//       font_size = "55px";
//     }
//     if(current_event == "6"){
//       font_size = "55px";
//     }
//     if(current_event == "Wicket"){
//       font_size = "40px";
//     }
//     if(current_event == "Wicket1"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket2"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "Wicket3"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "Wide+Wicket"){
//       font_size = "38px";
//       line_height = "38px";
//       padding = "5px";
//     }
//     if(current_event == "Wide"){
//       font_size = "40px";
//     }
//     if(current_event == "Wide1"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "Wide2"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "Wide3"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "Wide4"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "No Ball"){
//       font_size = "40px";
//     }
//     if(current_event == "NB1"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "NB2"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "NB3"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "NB4"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "NB5"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "NB6"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//     }
//     if(current_event == "ball_start"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//    }
//     if(current_event == "third_umpire"){
//         font_size = "38px";
//         line_height = "36px";
//         padding = "5px";
//      }
//     if(current_event == "free_hit"){
//       font_size = "40px";
//       line_height = "40px";
//       padding = "5px";
//    }
//     if(current_event == "not_out"){
//         font_size = "40px";
//         line_height = "40px";
//         padding = "5px";
//      }
//      if(current_event == "player_injured"){
//         font_size = "38px";
//         line_height = "36px";
//         padding = "5px";
//      }
//     $('.event').css("font-size", font_size);
//     $('.event').css("line-height", line_height);
//     $('.event').css("padding", padding);
//   }

// }

// function setScore(score){
//   if(score.match_id == match_id_show13){
//     current_event = score.event;
//     score_String = score.batteamname +'  '+ obj.score.batteamdesc + '</br>' + obj.score.bwlteamname +'  '+ score.bwlteamdesc +'</br>'
//      if(score.status){
//       score_String = score_String + score.status;
//     }

//     document.getElementById('score_table_' + match_id_show13).innerHTML = score_String;
//   }
// }


// function handleInstruction(instruction, match_id){
//   if(match_id == match_id_show13){
//     current_event =  instruction.event;
//     if(current_event == 'reload'){
//       // console.log("reload receved");
//     }
//   }
// }

// function setScoreEvent(scoring_event,match_id){
//   if (match_id == match_id_show13) {
//     scoring_event = scoring_event.event;
//     set_scoring_event_text(scoring_event);
//     set_event_font_size(scoring_event);
//   }
// }

// function closeMarket(market){
//   if(market.match_id == match_id_show13){
//     for(i = 0; i < market.runners.length; i++){
//       runner = market.runners[i];
//       var betfair_selection_id = runner.sid;
//       back_box = document.getElementById(market.betfair_market_id + "_back_" + runner.sid);
//       lay_box = document.getElementById(market.betfair_market_id + "_lay_" + runner.sid);

//       if (back_box != null){
//         back_box.innerHTML = "";
//         back_box.className += " close-status";
//       }

//       if (lay_box != null){
//         lay_box.innerHTML = ""
//         lay_box.className += " close-status";
//       }

//       setColorOfMarketRunner(runner,"white");
//     }
//   }
// }


// function setEvenOddOrEndingDigitMarket(market){
//   var market_type = market.heroic_market_type;
//   if (market.match_id == match_id_show13) {
//     try{
//       var status = market.status
//       if (status == 'OPEN' || status == "SUSPEND"){
//         if (market_type == 'even_odd') {
//           addEvenOddMarketIfNotPresent(market);
//         } else if (market_type == 'ending_digit') {
//           addEndingDigitMarketIfNotPresent(market);
//         }
//         else if (market_type == null) {
//           addCustomMarketMarketIfNotPresent(market);
//         }
//       }
//       else if (status == 'CLOSE'){
//         if (market_type == 'even_odd') {
//           removeEvenOddMarketIfPresent(market);
//         } else if (market_type == 'ending_digit') {
//           removeEndingDigitMarketIfPresent(market);
//         }
//         else if (market_type == null) {
//           removeCustomMarketMarketIfPresent(market);
//         }
//         return;
//       }
//     } catch(e){
//       // console.log(e);
//     }
//     setMarket(market);
//   }
// }

// function setColorOfMarketRunner(runner, color){
//   runner_id = runner.sid;
//   runner_name_selector = '[data-runner-sid="' + runner_id + '"][data-column="runner_name"]';
//   runner_name_td = $(runner_name_selector);
//   runner_name_td.css("background-color", color);
//   if (color == 'white'){
//     runner_name_td.css("color", '#49494A');
//     runner_name_td.parents("tr").removeClass("fav_run");
//     runner_name_td.parents("tr").addClass("non_fav_run");
//   }
//   else{
//     runner_name_td.css("color", '#fff');
//     runner_name_td.parents("tr").addClass("fav_run");
//     runner_name_td.parents("tr").removeClass("non_fav_run");
//   }

//   position_selector = '[data-runner-sid="' + runner_id + '"][data-column="position"]';
//   position_td = $(position_selector);
//   position_td.css("background-color", color);
//   position = position_td.data('position');
//   if(position < 0){
//     position_td.css("color", 'red');
//   }
//   else if(position > 0){
//     if (color == '#84C341'){
//        position_td.css("color", 'white');
//     }
//     else{
//        position_td.css("color", 'green');
//     }
//   }
//   else{
//     if (color == 'white'){
//        position_td.css("color", '#49494A');
//     }
//     else{
//        position_td.css("color", '#fff');
//     }
//   }
// }

// function closeSession(session){
//   if(session.match_id == match_id_show13){
//     var status = session.status;
//     var session_id = session.id;

//     document.getElementById(session_id + "_yes").innerHTML = ""
//     document.getElementById(session_id + "_no").innerHTML = ""

//     document.getElementById(session_id + "_no_rate").innerHTML = ""
//     document.getElementById(session_id + "_yes_rate").innerHTML = ""

//     document.getElementById(session_id + "_no").className += " close-status";
//     document.getElementById(session_id + "_no_rate").className += " close-status";

//     document.getElementById(session_id + "_yes").className += " close-status";
//     document.getElementById(session_id + "_yes_rate").className += " close-status";
//   }
// }

// function addEndingDigitMarketIfNotPresent(market){
//   var market_id = market.id
//   if ($("[data-heroic-market-type=ending_digit][data-heroic-market-id=" + market_id + "]").length == 0 ) {
//     addEndingDigitMarket(market);
//   };
// }

// function addCustomMarketMarketIfNotPresent(matket){
//   var market_id = market.id
//   if ($("[data-heroic-market-type=''][data-heroic-market-id=" + market_id + "]").length == 0 ) {
//     addCustomMarket(market);
//   };
// }

// function removeEndingDigitMarketIfPresent(market){
//   var market_id = market.id;
//   $("[data-heroic-market-type=ending_digit][data-heroic-market-id="+ market_id +"]").remove();
// }

// function removeCustomMarketMarketIfPresent(market){
//   var market_id = market.id;
//   $("[data-heroic-market-type=''][data-heroic-market-id="+ market_id +"]").remove();
// }

// function addEndingDigitMarket(market) {
//   var market_name = market.betfair_market_type;
//   var market_id = market.id;
//   var betfair_market_id = market.betfair_market_id;
//   var market_over = market.extra_info.over;
//   var team = market.extra_info.team_name;
//   var ending_digit_market = team + ' ' + market_over + ' ' + I18n.t('over_last_digit_ending_digit')
//   var closet_over = null;

//   closet_over = getMarketTableIndex(market_over, 'ending_digit');

//   var markup = '<table class="table table-bordered" data-heroic-market-type="ending_digit" data-heroic-market-id='+ market_id +' data-overs='+market_over+'><thead><tr>';
//   markup += '<th colspan="3" class="bet-place-tbl-th market_type_row market-name-row-color">';
//   markup += I18n.t('match_lottery_950');
//   markup += ' : '+ending_digit_market+'</th></tr>';
//   markup += '<tr><th class="bet-place-tbl-th run-pos-rate-amt-run-mod-color">';
//   markup += I18n.t('runner');
//   markup += '</th>';
//   markup += '<th class="bet-odds-type bet-place-tbl-th lagai-box-color">';
//   markup += I18n.t('rate')
//   markup += '</th>';
//   markup += '<th class="bet-place-tbl-th run-pos-rate-amt-run-mod-color">';
//   markup += I18n.t('position')
//   markup += '</th></tr></thead>';
//   markup += '<tbody class="ending-digits-tbody" data-market-id = '+market_id+' data-market-sid = '+betfair_market_id+' >';
//   markup += '</tbody></table>';

//   if (closet_over == 0) {
//     $(markup).prependTo(".ending-digits-markets-divs");
//   } else {
//     $('.ending-digits-markets-divs table[data-overs="'+closet_over+'"]').after(markup)
//   }

//   for (var i = 0; i < market.runners.length; i += 1) {
//     var runner_id = market.runners[i].id;
//     var sid = market.runners[i].sid;

//     var row_markup = '<tr data-runner-id = '+runner_id+' data-runner-sid = '+sid+'>';
//     row_markup += '<td data-runner-sid='+sid+' data-column="runner_name" class="runner_row_'+sid +' flag bet-place-tbl-td" style="text-align:left;"><img class="runner-flags hidden" src="/images/index.png">'+ i +'</td>';
//     row_markup += '<td data-runner-sid='+sid+' market-name="'+market_name+'" data-column="back" class="open-keyboard-even-odd MarketEvenOddTable bet-place-tbl-td first-runner-bet-odds-yes-value cursor-pointer active-lagai-bet-box-color close-status" odd-val="1.95" market-id='+market_id+' runner-id='+runner_id+' match-id='+match_id+' heroic-market-type="ending_digit" data-id="'+i+'" id="'+betfair_market_id+'_back_'+ sid +'"></td>';
//     row_markup += '<td data-runner-sid='+sid+' data-column="position" class="runner_row_'+sid+' bet-place-tbl-td  bet-val-cent" data-position="0">0</td></tr>';
//     $("[data-heroic-market-type=ending_digit][data-heroic-market-id="+ market_id +"]").append(row_markup);
//   }

// }

// function addEvenOddMarket(market) {
//   var market_name = market.betfair_market_type;
//   var market_id = market.id;
//   var market_over = market.extra_info.over;
//   var team = market.extra_info.team_name;
//   var even_odd_market_name = team + ' ' +market_over + ' ' + I18n.t('over_last_digit_even_odd')
//   var betfair_market_id = market.betfair_market_id;
//   var even_data_runner_id = market.runners[0].id;
//   var odd_data_runner_id = market.runners[1].id;
//   var sid = market.runners[0].sid;
//   var even_runner_id = market.runners[0].id;
//   var rid = market.runners[1].sid;
//   var odd_runner_id = market.runners[1].id;
//   var even_runner_name = I18n.t('even');
//   var odd_runner_name = I18n.t('odd');

//   var closet_over = null;
//   closet_over = getMarketTableIndex(market_over, 'even_odd');

//   var markup = '<table class="table table-bordered" data-heroic-market-type="even_odd" data-heroic-market-id='+ market_id +' data-overs='+market_over+'><thead><tr>';
//   markup += '<th colspan="3" class="bet-place-tbl-th market_type_row market-name-row-color">';
//   markup += I18n.t('market');
//   markup +=  ' : '+even_odd_market_name+'</th></tr>';
//   markup += '<tr><th class="bet-place-tbl-th run-pos-rate-amt-run-mod-color">';
//   markup += I18n.t('runner');
//   markup += '</th>';
//   markup += '<th class="bet-odds-type bet-place-tbl-th lagai-box-color">'
//   markup += I18n.t('rate');
//   markup += '</th>';
//   markup += '<th class="bet-place-tbl-th run-pos-rate-amt-run-mod-color">';
//   markup += I18n.t('position');
//   markup += '</th></tr></thead>';
//   markup += '<tbody data-market-id = '+ market_id +' data-market-sid = '+ betfair_market_id +' >';
//   markup += '<tr data-runner-id = '+ even_data_runner_id +' data-runner-sid = '+ sid +'>';
//   markup += '<td data-runner-sid='+ sid +' data-column="runner_name" class="runner_row_'+sid +' flag bet-place-tbl-td" style="text-align:left;"><img class="runner-flags hidden" src="/images/index.png">'+ even_runner_name +'</td>';
//   markup += '<td data-runner-sid='+ sid +' market-name="'+market_name+'" data-column="back" class="open-keyboard-even-odd MarketEvenOddTable bet-place-tbl-td first-runner-bet-odds-yes-value cursor-pointer active-lagai-bet-box-color close-status" odd-val="1.95" market-id='+ market_id +' runner-id='+even_runner_id+' match-id='+match_id+' heroic-market-type="even_odd" data-id="Even" id="'+betfair_market_id +'_back_'+ sid +'"></td>';
//   markup += '<td data-runner-sid='+ sid +' data-column="position" class="runner_row_'+sid +' bet-place-tbl-td  bet-val-cent" data-position="0">0</td></tr>';
//   markup += '<tr data-runner-id = '+ odd_data_runner_id +' data-runner-sid = '+ rid +'>';
//   markup += '<td data-runner-sid='+ rid +' data-column="runner_name" class="runner_row_'+ rid +' flag bet-place-tbl-td" style="text-align:left;"><img class="runner-flags hidden" src="/images/index.png">'+ odd_runner_name +'</td>';
//   markup += '<td data-runner-sid='+ rid +' market-name="'+market_name+'" data-column="back" class="open-keyboard-even-odd MarketEvenOddTable bet-place-tbl-td first-runner-bet-odds-yes-value cursor-pointer active-lagai-bet-box-color close-status" odd-val="1.95" market-id='+ market_id +' runner-id='+odd_runner_id+' match-id='+match_id+' heroic-market-type="even_odd" data-id="Odd" id="'+betfair_market_id +'_back_'+ rid +'"></td>';
//   markup += '<td data-runner-sid='+ rid +' data-column="position" class="runner_row_'+ rid +' bet-place-tbl-td  bet-val-cent" data-position="0"> 0 </td>';
//   markup += '</tbody></table>';

//   if (closet_over == 0) {
//     $(markup).prependTo(".even-odds-markets-divs");
//   } else {
//     $('.even-odds-markets-divs table[data-overs="'+closet_over+'"]').after(markup)
//   }
// }

// function addCustomMarket(market){
//   var market_name = market.betfair_market_type;
//   var market_id = market.id;
//   var betfair_market_id = market.betfair_market_id;
//   var runners = market.runners;
//   var match_id = market.match_id;
//   var closest_market = null;
//   var heroic_market_type = "";

//   closest_market = getCustomMarketTableIndex('', market_id);

//   var markup = '<table class="table table-bordered" data-heroic-market-type="" data-heroic-market-id=' + market_id + '><thead>';
//   markup += '<tr><th colspan="4" class="bet-place-tbl-th market_type_row market-name-row-color">';
//   markup += I18n.t('market');
//   markup +=  ' : '+market_name+'</th></tr>';
//   markup += '<tr><th class="bet-place-tbl-th run-pos-rate-amt-run-mod-color">';
//   markup += I18n.t('runner');
//   markup += '</th>';
//   markup += '<th class="bet-odds-type bet-place-tbl-th lagai-box-color">';
//   markup += I18n.t('lagai');
//   markup += '</th>';
//   markup += '<th class="bet-odds-type bet-place-tbl-th khai-box-color">';
//   markup += I18n.t('khai');
//   markup += '</th><th class="bet-place-tbl-th run-pos-rate-amt-run-mod-color">';
//   markup += I18n.t('position');
//   markup += '</th></tr></thead>';
//   markup += '<tbody data-market-id = ' + market_id + ' data-market-sid = ' + market_id + '>';
//   for (var i = 0; i < runners.length; i++){
//     id = runners[parseInt(i)]['id'];
//     sid = runners[parseInt(i)]['sid'];
//     back_value = runners[parseInt(i)]['b'];
//     lay_value = runners[parseInt(i)]['l'];
//     markup += '<tr data-runner-id=' + id + ' data-runner-sid=' + sid + ' class=" fav_run ">';
//     markup += '<td data-runner-sid='+ sid +' data-column="runner_name" class="runner_row_'+sid +' flag bet-place-tbl-td" style="text-align:left;"><img class="runner-flags hidden" src="/images/index.png">'+ sid +'</td>'
//     markup += '<td data-runner-sid='+ sid +' data-column="back" class="open-keyboard-custom CustomMarket bet-place-tbl-td first-runner-bet-odds-yes-value cursor-pointer active-lagai-bet-box-color" odd-val="'+ back_value +'" market-id="'+ market_id +'" runner-id="'+ id +'" match-id="'+ match_id +'" heroic-market-type="" data-id ="LAGAI" id="'+ betfair_market_id+ '_back_'+ sid +'"> ' + (back_value-1).toPrecision(2) + '</td>';
//     markup += '<td data-runner-sid='+ sid +' data-column="lay" class="open-keyboard-custom CustomMarket bet-place-tbl-td first-runner-bet-odds-yes-value cursor-pointer active-lagai-bet-box-color" odd-val="'+ lay_value +'" market-id="'+ market_id +'" runner-id="'+ id +'" match-id="'+ match_id +'" heroic-market-type="" data-id ="KHAI" id="'+ betfair_market_id+ '_lay_'+ sid +'"> ' + (lay_value-1).toPrecision(2) + '</td>';
//     markup += '<td data-runner-sid='+ sid +' data-column="position" class="runner_row_'+sid +' bet-place-tbl-td  bet-val-cent" data-position="0">0</td>';
//     markup += '</tr>';
//   }
//   markup += '</tbody></table>';

//   if (closest_market == 0) {
//     $(markup).prependTo(".custom-markets-divs");
//   } else {
//     $("[data-heroic-market-id=" + closest_market +"]").after(markup);
//   }
// }

// function addEvenOddMarketIfNotPresent(market){
//   var market_id = market.id
//   if ($("[data-heroic-market-type=even_odd][data-heroic-market-id=" + market_id + "]").length == 0 ) {
//     addEvenOddMarket(market);
//   };
// }

// function removeEvenOddMarketIfPresent(market){
//   var market_id = market.id;
//   $("[data-heroic-market-type=even_odd][data-heroic-market-id="+ market_id +"]").remove();
// }

// function getMarketTableIndex(market_over, market_type) {
//   var overs_arr = [];

//   $('[data-heroic-market-type="'+market_type+'"]').each(function( index ) {
//     over = $( this ).data("overs");
//     overs_arr.push(over);
//   });
//   overs_arr = overs_arr.sort();
//   var closet_over = null;
//   closet_over = getClosestDownOver(overs_arr, market_over);
//   return closet_over;
// }

// function getCustomMarketTableIndex(market_type, market_id) {
//   var market_array = [];

//   $('[data-heroic-market-type="'+market_type+'"]').each(function( index ) {
//     market = $(this).data('heroic-market-id');
//     market_array.push(market);
//   });
//   market_array = market_array.sort();
//   var closet_fancy_market = null;
//   closet_fancy_market = getClosetFancyMarket(market_array, market_id);
//   return closet_fancy_market;
// }

// function getClosetFancyMarket(market_array, market_id){
//   var num = closed_market_id = 0;
//   for(var i = 0; i < market_array.length; i++) {
//     num = market_array[i];
//     if(num <= market_id) { closed_market_id = num; }
//   }
//   return closed_market_id;
// }

// function getClosestDownOver(overs_arr, market_over) {
//   var num = closet_over = 0;
//   for(var i = 0; i < overs_arr.length; i++) {
//     num = overs_arr[i];
//     if(num <= market_over) { closet_over = num; }
//   }
//   return closet_over;
// }

// function setSession(session){
//   if(session.match_id == match_id_show13){
//     try{
//       var status = session.status
//       var session_id = session.id
//       var can_yes = session.can_yes
//       var can_no = session.can_no
//       var session_run = session.session_run;
//       if (session_run) {
//         var no_rate_value = session.session_run.no_rate;
//         var yes_rate_value = session.session_run.yes_rate;
//         var yes_rate = (yes_rate_value -1).toFixed(2);
//         var no_rate = (no_rate_value -1).toFixed(2);
//         var session_run_id = session.session_run.id
//         var session_no_run = session.session_run.no_run;
//         var session_yes_run = session.session_run.yes_run;
//       }
//       if (status == 'OPEN' || status == "SUSPEND"){
//         addSessionIfNotPresent(session);
//       }
//       else if (status == 'CLOSE' ){
//         removeSessionIfPresent(session);
//         return;
//       }
//       closeSession(session);
//       if (status =='OPEN'){
//         if ((can_no == true && session_run)){
//           document.getElementById(session_id + "_no").innerHTML = session_no_run;
//           document.getElementById(session_id + "_no_rate").innerHTML = no_rate;
//           document.getElementById(session_id + "_no").classList.remove("close-status");
//           document.getElementById(session_id + "_no_rate").classList.remove("close-status");
//           document.getElementById(session_id + "_no").setAttribute("session-run-id", session_run_id);
//         }
//         if ((can_yes == true && session_run)){
//           document.getElementById(session_id + "_yes").innerHTML = session_yes_run;
//           document.getElementById(session_id + "_yes_rate").innerHTML = yes_rate;
//           document.getElementById(session_id + "_yes").classList.remove("close-status");
//           document.getElementById(session_id + "_yes").setAttribute("session-run-id", session_run_id);
//         }
//       }
//     }
//     catch(e){
//       // console.log(e);
//     }
//     setBetStatus();
//   }
// }

// function getNextHighestNumbersIndex(arr, value) {
//   var i = arr.length;
//   while (arr[--i] < value);
//   return ++i;
// }

// function getTableRowIndex(session_overs, session_innings) {
//   var overs_arr = [];

//   $('[data-heroic-market-type="session"][data-innings="'+session_innings+'"]').each(function( index ) {
//     over = $( this ).data("overs");
//     overs_arr.push(over);
//   });
//   overs_arr = overs_arr.sort(function(a, b){return b-a});
//   var row_index = null;
//   row_index = getNextHighestNumbersIndex(overs_arr, session_overs);
//   return row_index;
// }

// function checkAndAddSessionType(session){
//   var session_type = session._type;
//   if (session_type == "runs_in_overs" || session_type == "runs_in_innings") {
//     addSession(session);
//   } else if(session_type == "fall_of_wicket_at_runs"){
//     addFallOfWicketSession(session);
//   } else if(session_type == "batsman_runs"){
//     addTopBatsManSession(session);
//   }
// }

// function getCustomSessionTableIndex(session_type, session_id, session_innings) {
//   var sessions_array = [];

//   $('[data-session-type="'+session_type+'"][data-innings="'+session_innings+'"]').each(function( index ) {
//     session = $(this).data('heroic-market-id');
//     sessions_array.push(session);
//   });
//   sessions_array = sessions_array.sort();
//   var closet_custom_session = null;
//   closet_custom_session = getClosetFancyMarket(sessions_array, session_id);
//   return closet_custom_session;
// }

// function addTopBatsManSession(session){
//   var status = session.status
//   var session_id = session.id
//   var session_title = session.heroic_title
//   var session_team = session.team
//   var session_match_id = session.match_id
//   var session_run_id = 0
//   var session_overs = session.overs
//   var session_innings = session.innings

//   var markup = '<tr data-session-type ="batsman_runs" data-heroic-market-type ="session" data-heroic-market-id ='+session_id+' data-overs='+session_overs+' data-innings='+session_innings+'>';
//   markup += "<td data-column = 'session_title' class='bet-place-tbl-td' style='text-align:left;'>" + session_title + "</td>";
//   markup += "<td data-column = 'no_runs' class='open-keyboard-session not-value-box-color SessionTable bet-place-tbl-td first-runner-bet-odds-yes-value cursor-pointer close-status' data-id ='NO' match-id ="+ session_match_id +" session-run-id = "+ session_run_id +" session-id ="+ session_id +" id="+ session_id +"_no"+ ">" + "</td>";
//   markup += "<td data-column = 'no_rate' class='bet-place-tbl-td bet-val-cent close-status' id="+ session_id + "_no_rate" + ">" + " </td>"
//   markup += "<td data-column = 'yes_runs' class='open-keyboard-session yes-value-box-color SessionTable bet-place-tbl-td first-runner-bet-odds-no-value cursor-pointer close-status' data-id ='YES' match-id ="+ session_match_id +" session-run-id = "+ session_run_id +" session-id ="+ session_id +" id="+ session_id +"_yes"+ ">" + "</td>";
//   markup += "<td data-column = 'yes_rate' class='bet-place-tbl-td bet-val-cent close-status' id="+ session_id + "_yes_rate" + ">" +" </td>"
//   markup += "</tr>";

//   var row_index = getCustomSessionTableIndex('batsman_runs', session_id, session_innings);

//   var overs_sessions = getOversSession(session_innings);
//   if (overs_sessions.length > 0){
//     if (row_index == 0) {
//       overs_sessions.last().after(markup);
//     } else if (row_index > 0) {
//       $("[data-heroic-market-id="+row_index+"][data-innings="+session_innings+"]").after(markup);
//     }
//   } else {
//     if (row_index == 0) {
//       $(markup).prependTo(".session-bets-table > tbody");
//     } else if (row_index > 0) {
//       $("[data-heroic-market-id="+row_index+"][data-innings="+session_innings+"]").after(markup);
//     }
//   }
// }

// function getOversSession(session_innings){
//   var overs_sessions_with_lambi = $('[data-heroic-market-type="session"][data-overs=""][data-session-type="runs_in_innings"][data-innings="'+session_innings+'"]');
//   var overs_sessions_with_lambi_50 = $('[data-heroic-market-type="session"][data-overs="50"][data-session-type="runs_in_innings"][data-innings="'+session_innings+'"]');
//   var overs_sessions_with_lambi_20 = $('[data-heroic-market-type="session"][data-overs="20"][data-session-type="runs_in_innings"][data-innings="'+session_innings+'"]');
//   var second_innings_with_runs_in_overs = $('[data-heroic-market-type="session"][data-session-type="runs_in_overs"][data-innings="2"]');
//   var second_innings_with_runs_in_overs = $('[data-heroic-market-type="session"][data-session-type="runs_in_overs"][data-innings="2"]');
//   var runs_in_overs_sessions = $('[data-heroic-market-type="session"][data-session-type="runs_in_overs"][data-innings="'+session_innings+'"]');
//   if (runs_in_overs_sessions.length > 0) {
//    if (overs_sessions_with_lambi.length > 0) {
//      return overs_sessions_with_lambi;
//    } else {
//      return runs_in_overs_sessions;
//    }
//  } else if (overs_sessions_with_lambi.length > 0) {
//     return overs_sessions_with_lambi;;
//   } else if(second_innings_with_runs_in_overs.length > 0) {
//     return second_innings_with_runs_in_overs;;
//   } else if(second_innings_with_runs_in_overs.length > 0) {
//     return second_innings_with_runs_in_innings;;
//   } else if (overs_sessions_with_lambi_20.length > 0) {
//     return overs_sessions_with_lambi_20;
//   } else if (overs_sessions_with_lambi_50.length > 0) {
//     return overs_sessions_with_lambi_50;
//   } else {
//     return runs_in_overs_sessions;
//   }
// }

// function addFallOfWicketSession(session){
//   var status = session.status
//   var session_id = session.id
//   var session_title = session.heroic_title
//   var session_team = session.team
//   var session_match_id = session.match_id
//   var session_run_id = 0
//   var session_overs = session.overs
//   var session_innings = session.innings

//   var markup = '<tr data-session-type ="fall_of_wicket_at_runs" data-heroic-market-type ="session" data-heroic-market-id ='+session_id+' data-overs='+session_overs+' data-innings='+session_innings+'>';
//   markup += "<td data-column = 'session_title' class='bet-place-tbl-td' style='text-align:left;'>" + session_title + "</td>";
//   markup += "<td data-column = 'no_runs' class='open-keyboard-session not-value-box-color SessionTable bet-place-tbl-td first-runner-bet-odds-yes-value cursor-pointer close-status' data-id ='NO' match-id ="+ session_match_id +" session-run-id = "+ session_run_id +" session-id ="+ session_id +" id="+ session_id +"_no"+ ">" + "</td>";
//   markup += "<td data-column = 'no_rate' class='bet-place-tbl-td bet-val-cent close-status' id="+ session_id + "_no_rate" + ">" + " </td>"
//   markup += "<td data-column = 'yes_runs' class='open-keyboard-session yes-value-box-color SessionTable bet-place-tbl-td first-runner-bet-odds-no-value cursor-pointer close-status' data-id ='YES' match-id ="+ session_match_id +" session-run-id = "+ session_run_id +" session-id ="+ session_id +" id="+ session_id +"_yes"+ ">" + "</td>";
//   markup += "<td data-column = 'yes_rate' class='bet-place-tbl-td bet-val-cent close-status' id="+ session_id + "_yes_rate" + ">" +" </td>"
//   markup += "</tr>";

//   var row_index = getCustomSessionTableIndex('fall_of_wicket_at_runs', session_id, session_innings);
//   var overs_sessions = getOversSession(session_innings);
//   var batsman_runs_sessions = $('[data-heroic-market-type="session"][data-session-type="batsman_runs"][data-innings="'+session_innings+'"]');

//   if (overs_sessions.length > 0){
//     if (batsman_runs_sessions.length > 0) {
//       if (row_index == 0) {
//         batsman_runs_sessions.last().after(markup);
//       } else if (row_index > 0) {
//         $("[data-heroic-market-id="+row_index+"][data-innings="+session_innings+"]").after(markup);
//       }
//     } else {
//       if (row_index == 0) {
//         overs_sessions.last().after(markup);
//       } else if (row_index > 0) {
//         $("[data-heroic-market-id="+row_index+"][data-innings="+session_innings+"]").after(markup);
//       }
//     }
//   } else {
//     if (batsman_runs_sessions.length > 0) {
//       if (row_index == 0) {
//         batsman_runs_sessions.last().after(markup);
//       } else if (row_index > 0) {
//         $("[data-heroic-market-id="+row_index+"][data-innings="+session_innings+"]").after(markup);
//       }
//     } else if (row_index == 0) {
//       $(markup).prependTo(".session-bets-table > tbody");
//     } else if (row_index > 0) {
//       $("[data-heroic-market-id="+row_index+"][data-innings="+session_innings+"]").after(markup);
//     }
//   }
// }

// function addSession(session){
//   var status = session.status
//   var session_id = session.id
//   var session_title = session.heroic_title
//   var session_team = session.team
//   var session_match_id = session.match_id
//   var session_run_id = 0
//   var session_overs = session.overs
//   if (session_overs == null) {
//     session_overs = ""
//   }
//   var session_innings = session.innings
//   var session_type = session._type
//   var row_index = null;

//   var markup = '<tr data-session-type ='+session_type+' data-heroic-market-type ="session" data-heroic-market-id ='+session_id+' data-innings='+session_innings+' data-overs='+session_overs+'>';
//   markup += "<td data-column = 'session_title' class='bet-place-tbl-td' style='text-align:left;'>" + session_title + "</td>";
//   markup += "<td data-column = 'no_runs' class='open-keyboard-session not-value-box-color SessionTable bet-place-tbl-td first-runner-bet-odds-yes-value cursor-pointer close-status' data-id ='NO' match-id ="+ session_match_id +" session-run-id = "+ session_run_id +" session-id ="+ session_id +" id="+ session_id +"_no"+ ">" + "</td>";
//   markup += "<td data-column = 'no_rate' class='bet-place-tbl-td bet-val-cent close-status' id="+ session_id + "_no_rate" + ">" + " </td>"
//   markup += "<td data-column = 'yes_runs' class='open-keyboard-session yes-value-box-color SessionTable bet-place-tbl-td first-runner-bet-odds-no-value cursor-pointer close-status' data-id ='YES' match-id ="+ session_match_id +" session-run-id = "+ session_run_id +" session-id ="+ session_id +" id="+ session_id +"_yes"+ ">" + "</td>";
//   markup += "<td data-column = 'yes_rate' class='bet-place-tbl-td bet-val-cent close-status' id="+ session_id + "_yes_rate" + ">" +" </td>"
//   markup += "</tr>";

//   if (session_overs == "" ) {
//     var overs_sessions = $('[data-heroic-market-type="session"][data-session-type="runs_in_overs"][data-innings="'+session_innings+'"]');
//     var runs_in_innings_sessions = $('[data-heroic-market-type="session"][data-session-type="runs_in_innings"][data-innings="'+session_innings+'"]');
//     var second_innings_sessions = $('[data-heroic-market-type="session"][data-innings="2"]');
//     if (overs_sessions.length > 0) {
//       overs_sessions.last().after(markup);
//     } else if (runs_in_innings_sessions.length > 0) {
//       runs_in_innings_sessions.last().after(markup);
//     } else if (session_innings == 1 && second_innings_sessions.length > 0) {
//       second_innings_sessions.last().after(markup);
//     } else {
//       $(markup).prependTo(".session-bets-table > tbody");
//     }
//   } else {
//     row_index = getTableRowIndex(session_overs, session_innings);
//     if(row_index == 0) {
//       $(markup).prependTo(".session-bets-table > tbody");
//     } else {
//       $('.session-bets-table > tbody > tr[data-innings='+session_innings+']').eq(row_index - 1).after(markup);
//     }

//     // if (session_innings == 2) {
//     //   if (row_index == 0) {
//     //     $(markup).prependTo(".session-bets-table > tbody");
//     //   } else {
//     //     $('.session-bets-table > tbody > tr[data-innings="2"]').eq(row_index - 1).after(markup);
//     //   }
//     // } else if(session_innings == 1) {
//     //     if (row_index == 0) {
//     //     if ($('.session-bets-table > tbody > tr[data-innings="2"]').length > 0) {
//     //       $('.session-bets-table > tbody > tr[data-innings="2"]').last().after(markup);
//     //     } else {
//     //       $(markup).prependTo(".session-bets-table > tbody");
//     //     }
//     //   } else {
//     //     $('.session-bets-table > tbody > tr[data-innings="1"]').eq(row_index - 1).after(markup);
//     //   }
//     // } else if(session_innings == 3) {
//     //     if (row_index == 0) {
//     //     $(markup).prependTo(".session-bets-table > tbody");
//     //   } else {
//     //     $('.session-bets-table > tbody > tr[data-innings="3"]').eq(row_index - 1).after(markup);
//     //   }
//     // } else if(session_innings == 4) {
//     //     if (row_index == 0) {
//     //     $(markup).prependTo(".session-bets-table > tbody");
//     //   } else {
//     //     $('.session-bets-table > tbody > tr[data-innings="4"]').eq(row_index - 1).after(markup);
//     //   }
//     // }
//   }
// }

// function addSessionsHeader(){
//   var markup = '<tr class="sessions-title"><th colspan="5" class="bet-place-tbl-th market_type_row market-name-row-color">'+ I18n.t("session") +'</th></tr>';
//   markup += '<tr class="sessions-header"><th class="bet-place-tbl-th run-pos-rate-amt-run-mod-color">'+ I18n.t("session") +'</th>';
//   markup += '<th class="bet-odds-type bet-place-tbl-th not-box-color">'+ I18n.t("no") +'</th>';
//   markup += '<th class="bet-place-tbl-th run-pos-rate-amt-run-mod-color">'+ I18n.t("rate") +'</th>';
//   markup += '<th class="bet-odds-type bet-place-tbl-th yes-box-color">'+ I18n.t("yes") +'</th>';
//   markup += '<th class="bet-place-tbl-th run-pos-rate-amt-run-mod-color">'+ I18n.t("rate") +'</th></tr>';
//   $('.sessions-thead').append(markup);
// }

// function addSessionIfNotPresent(session){
//   var session_id = session.id

//   if ($( "thead.sessions-thead" ).children('.sessions-title').length == 0) {
//     addSessionsHeader();
//   }

//   if ($("[data-heroic-market-type=session][data-heroic-market-id=" + session_id + "]").length == 0 ) {
//     checkAndAddSessionType(session);
//   };
// }

// function removeSessionIfPresent(session){
//   var session_id = session.id

//   $("[data-heroic-market-type=session][data-heroic-market-id=" + session_id + "]").remove();

//   if ($("[data-heroic-market-type=session]").length == 0) {
//     $('.sessions-title').remove();
//     $('.sessions-header').remove();
//   }
// }

// function isAnyBetOpen(){
//   is_any_bet_open = false;
//   $('[data-column="back"]').each(function (idx, el) {
//    is_bet_closed = el.classList.contains("close-status");
//    if (!is_bet_closed){
//      is_any_bet_open = true;
//    }
//   });

//   $('[data-column="lay"]').each(function (idx, el) {
//    is_bet_closed = el.classList.contains("close-status");
//    if (!is_bet_closed){
//      is_any_bet_open = true;
//    }
//   });

//    $('[data-column="no_runs"]').each(function (idx, el) {
//    is_bet_closed = el.classList.contains("close-status");
//    if (!is_bet_closed){
//      is_any_bet_open = true;
//    }
//   });

//   $('[data-column="yes_runs"]').each(function (idx, el) {
//    is_bet_closed = el.classList.contains("close-status");
//    if (!is_bet_closed){
//      is_any_bet_open = true;
//    }
//   });

//   return is_any_bet_open;
// }

// function setHeroicCommentary(heroic_commentary){
//   if(heroic_commentary.match_id == match_id_show13){
//     current_event = heroic_commentary.event;
//     setHeroicCommentaryEvent(current_event);
//   }
// }

// function setHeroicCommentaryEvent(heroic_commentary_event){
//   set_event_text(heroic_commentary_event);
//   set_event_font_size(heroic_commentary_event);
//   if(heroic_commentary_event != "third_umpire" &&
//     heroic_commentary_event != "ball_start" &&
//     heroic_commentary_event != "free_hit" &&
//     heroic_commentary_event != "player_injured"){
//     setTimeout(function(){
//       setBetStatus();
//     }, 2000);
//   }
// }


// function super_value(v, key_value){
//   $('#quantity').attr("data-finder",key_value);
//   document.getElementById('quantity').value = v;
// }

// function single_value(num_value, key_value){
//   var current_finder = $('#quantity').attr("data-finder");
//   $('#quantity').attr("data-finder",key_value);
//   if(current_finder == "button_value"){
//     document.getElementById('quantity').value = num_value;
//   }
//   else{
//     document.getElementById('quantity').value = document.getElementById('quantity').value+ num_value;
//   }
// }

// function super_value_even_odd(v, key_value){
//   $('#quantity-even-odd').attr("data-finder",key_value);
//   document.getElementById('quantity-even-odd').value = v;
// }

// function single_value_even_odd(num_value, key_value){
//   var current_finder = $('#quantity-even-odd').attr("data-finder");
//   $('#quantity-even-odd').attr("data-finder",key_value);
//   if(current_finder == "button_value"){
//     document.getElementById('quantity-even-odd').value = num_value;
//   }
//   else{
//     document.getElementById('quantity-even-odd').value = document.getElementById('quantity-even-odd').value+ num_value;
//   }
// }

// function ClearFields(){
//   document.getElementById("quantity").value = "";
//   document.getElementById("quantity-session").value = "";
//   document.getElementById("quantity-even-odd").value = "";
// }

// function super_value2(v, key_value){
//   $('#quantity-session').attr("data-finder",key_value);
//   document.getElementById('quantity-session').value = v;
// }

// function single_value2(num_value, key_value){
//   var current_finder = $('#quantity-session').attr("data-finder");
//   $('#quantity-session').attr("data-finder",key_value);
//   if(current_finder == "button_value"){
//     document.getElementById('quantity-session').value = num_value;
//   }
//   else{
//     document.getElementById('quantity-session').value = document.getElementById('quantity-session').value+ num_value;
//   }
// }

// // called when the client receives a STOMP message from the server
// var messageRecivedStomp = function(message) {
//   obj = JSON.parse(message.body);
//   if(obj.type == "scoring_event"){
//     scoring_event = obj.scoring_event;
//     match_id = obj.match_id
//     setScoreEvent(scoring_event,match_id);
//   }
//   if (obj.type == "score") {
//     score = obj.score;
//     setScore(score);
//   }
//   if (obj.type == "heroic_commentary") {
//     heroic_commentary = obj.heroic_commentary;
//     setHeroicCommentary(heroic_commentary);
//   }
//  if (obj.type == "odds") {
//     market = obj.market;
//     setMarket(market);
//   }
//   if (obj.type == "session") {
//     session = obj.session;
//     setSession(session);
//   }
//   if (obj.type == "odds") {
//     var markets = ['even_odd', 'ending_digit', null];
//     var market_type = obj.market.heroic_market_type;
//     if (markets.indexOf(market_type) >= 0){
//       market = obj.market;
//       setEvenOddOrEndingDigitMarket(market);
//     }
//   }
//   // if (obj.type == "odds") {
//   //   var markets = [null];
//   //   var market_type = obj.market.heroic_market_type;
//   //   if (markets.indexOf(market_type) >= 0){
//   //     market = obj.market;
//   //     setEvenOddOrEndingDigitMarket(market);
//   //   }
//   // }
//   if(obj.type == "instruction"){
//     instruction = obj.instruction
//     match_id = obj.match_id
//     handleInstruction(instruction, match_id);
//   }
// };

// var messageRecivedMQTT = function(message) {
//   obj = JSON.parse(message.payloadString);
//   // console.log(message.payloadString);

//   if(obj.type == "scoring_event"){
//     scoring_event = obj.scoring_event;
//     match_id = obj.match_id
//     setScoreEvent(scoring_event,match_id);
//   }
//   if (obj.type == "score") {
//     score = obj.score;
//     setScore(score);
//   }
//   if (obj.type == "heroic_commentary") {
//     heroic_commentary = obj.heroic_commentary;
//     setHeroicCommentary(heroic_commentary);
//   }
//  if (obj.type == "odds") {
//     market = obj.market;
//     setMarket(market);
//   }

//   if (obj.type == "session") {
//     session = obj.session;
//     setSession(session);
//   }
//   if (obj.type == "odds") {
//     var markets = ['even_odd', 'ending_digit', null];
//     var market_type = obj.market.heroic_market_type;
//     if (markets.indexOf(market_type) >= 0){
//       market = obj.market;
//       setEvenOddOrEndingDigitMarket(market);
//     }
//   }
//   if (obj.type == "odds") {
//     var markets = [null];
//     var market_type = obj.market.heroic_market_type;
//     if (markets.indexOf(market_type) >= 0){
//       market = obj.market;
//       setEvenOddOrEndingDigitMarket(market);
//     }
//   }
//   if(obj.type == "instruction"){
//     instruction = obj.instruction
//     match_id = obj.match_id
//     handleInstruction(instruction, match_id);
//   }
// };
