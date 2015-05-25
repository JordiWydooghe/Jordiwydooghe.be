$('.link-overlay a').on('click', function(){     
    var Url = $(this).attr("href");

    var link = '<div class="modal fade" id="link-modal"><div class="modal-dialog"><div class="modal-content"></div></div></div>';
    var closeButton = '<a href="#" id="modal-close" data-dismiss="modal" aria-hidden="true"><i class="icon-cancel-circled"></i></a>';

    $(link).modal({
      remote: Url + ' #link'
    })
    .on('shown.bs.modal', function () {
      initProjectSlider();
      $('#link-modal .modal-dialog').prepend(closeButton);
    })
    .on('hidden.bs.modal', function () {
      $(this).remove();      
    })   


    return false;
  
  });