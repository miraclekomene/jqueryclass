$(document).ready(function(){
    $("section").click(function (){
        $(this).hide("fast")
    })

    // hide
    $("#hideThis").click(function(){
        $(this).hide();
    });

    // show
    $('button[type="button"]').click(function () {
        $("#hideThis").show('slow')
    })

    // toggle
    $('.togl').click(function () {
        $('#hideThis').toggle(2000)
    })

    // slide with callback
    $('#slideBtn').click(function () {
        $('#slideDiv').slideToggle(5000, function () {
            alert('action completed')
        })
    })

    
    // animate
    $('#animateBtn').click(function () {
        $('#animateDiv').animate({
            left: '+=100px',
            height: '+=100px',
            width: '+=100px',
            marginTop: '100px'
        })
    })

    $('#stop').click(function () {
        $('#slideDiv').stop()
    })

    // chaining
    $('.chaining').click(function () {
        $(this).css('color','red').slideUp(2000).slideDown(2000)
    })

    // get
    $('#PrinceTXT').click(function () {
        // alert($(this).text());
        $('#contentDisplay1').text($(this).text())
    })

    $('h2.Secondcontent').dblclick(function () {
        alert($(this).html())

        $('#contentDisplay2').html($(this).html())
    })

    $('h2#AvalueText').click(function () {
        alert($('input.MrNoName').val())
    })

    // set
    $('#setElementText').click(function () {
        $(this).text('My name is coding')
    })

    $('.sethtmlText').dblclick(function () {
        $(this).html('<h1 style="background-color: green; color: white;">some html text is set</h1>')
    })

    $('.btnSet').click(function(){
        $('#setInput').val('I am a user coding')
    })

    $('.contentDiv').click(function () {
        // set height and width
        $(this).height(400)
        $(this).width(450)
        // jquery add
        $(this).append("append - Inserts content at the end of the selected elements") 
        $(this).prepend("prepend - Inserts content at the beginning of the selected elements") 
        $(this).after("after - Inserts content after the selected elements") 
        $(this).before("before - Inserts content before the selected elements") 

        $(this).css({
            backgroundColor: 'green',
            padding: '20px'
        }) 

        $('#result').html("height:"+ $(this).height()+ " width:"+ $(this).width())
    })
});