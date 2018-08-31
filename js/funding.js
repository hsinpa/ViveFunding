
$(function() {

    function ChangeIDClass(p_target_class, p_to_class ) {
        $("."+p_target_class).removeClass( "display_all" );
        $("."+p_target_class).attr('class', 'display_null');

        $("."+p_to_class).removeClass( "display_null" );
        $("."+p_to_class).attr('class', 'display_all');
    }

    $( ".funding_front" ).submit(function( event ) {
        console.log( "Handler for funding_front." );
        event.preventDefault();

        ChangeIDClass("funding_front", "funding_back");
      });

    $( ".funding_back" ).submit(function( event ) {
        console.log( "Handler for funding_back" );
        event.preventDefault();

        // ChangeIDClass("funding_back", "funding_front");
        
    });

    var quill = new Quill('#editor-container', {
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
          ]
        },
        placeholder: 'Compose an epic...',
        theme: 'snow'  // or 'bubble'
      });

});