$(document).ready(function(){ 

    // Tabbing Code
    $('.tab-a').click(function(){  
      $(".tab").removeClass('tab-active');
      $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
      $(".tab-a").removeClass('active-a');
      $(this).parent().find(".tab-a").addClass('active-a');
     });

    //  Humburger Code
     $('.humburger-icon').on('click', function() {
        $('#sidebar').toggleClass('visible');
      });
      $('#sidebar .header-menu li a span.down-arrow').on('click',function() {
        var curr_obj = $(this);
        curr_obj.closest('li').find('ul.submenu').toggle();
      });
      $('#sidebar .close-btn .btn').on('click',function() {
        $('#sidebar').removeClass('visible');
      });
});