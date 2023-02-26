
var starts = new Date;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return  minutes + ":" + seconds;
}

$(document).ready(function () { 

  let rezalt=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""];
  let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""];

function start()
{

   rezalt=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""];
   arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""];
  for(let i=0;i<16;i++)
  {
    randomIndex = Math.floor(Math.random() * i);
    let tmp = arr[randomIndex];
    arr[randomIndex] = arr[randomIndex + 1];
    arr[randomIndex + 1] = tmp;
  }
  let id;
  for(let i=0;i<16;i++)
  {
   id="#td"+i;
 
   $(id).text(arr[i]);
   $(id).css("background-image", "url(img/2.bmp)");

  if(i==15)
  {
    $(id).text("");
    $(id).css("background-image", "none");
  }
  }
}

  $('#th0').bind('click', function (e)
  {
   rezalt=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""];
   arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""];
   start();
  function game(e)
  {

         let id= $(this).attr('id');
         let a =id.match(/\d+/g);
         let t =parseInt(a[0]);
        
         let arre =Array.from($("td"));
         let value = $(this).text();

         function finish()
         {
          for(let i=0;i<14;i++)
              {
                if(arre[i].innerText!=rezalt[i])
                return ;
              }
              $('td').unbind('click');
              var end = new Date; 
              let End=end - starts;
              $("#th2").css("display","block");
              $("#th2").text("Время игры: "+msToTime(End));
         }
     
            if (id != "td0" && id != "td4" && id != "td8" && id != "td12" && arre[t-1].innerText == '')
            {
              let index=t-1;
              id="#td"+index;
              $(id).css("background-image", "url(img/1.bmp)");
              arre[t-1].innerText =$(this).text();
              $(this).css("background-image", "none");
              $(this).text('');
              finish();
            }
            else if ( id != "td0" && id != "td1" && id != "td2" && id != "td3" && arre[t-4].innerText == '')
            {
              let index=t-4;
              id="#td"+index;
              $(id).css("background-image", "url(img/1.bmp)");
              arre[t-4].innerText =$(this).text();
              $(this).css("background-image", "none");
              $(this).text('');
              finish();
            }
            else if (id != "td12" && id != "td13" && id != "td14" && id != "td15" && arre[t+4].innerText == '')
            {
              let index=t+4;
              id="#td"+index;
              $(id).css("background-image", "url(img/1.bmp)");
              arre[t+4].innerText =$(this).text();
              $(this).css("background-image", "none");
              $(this).text('');
              finish();
            }
            else if (id !="td3" && id !="td7" && id != "td11" && id != "td15" && arre[t+1].innerText == '')
            {
              let index=t+1;
              id="#td"+index;
              $(id).css("background-image", "url(img/1.bmp)");
              arre[t+1].innerText =$(this).text();
              $(this).css("background-image", "none");
              $(this).text('');
              finish();
            }
   }
  $('td').bind('click', game);
  });


  $('#th1').bind('click', function (e)
  {
    $("#th2").css("display","none");
    starts = new Date;
    rezalt=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""];
    arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""];
    start();
  });


});


  



