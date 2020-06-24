// Wait until the DOM is fully loaded Make sure we wait to attach our handlers .
$(function() {

  // Listener for the devour button click
  $(".devour-button").on("click", function(event) {
    // Prevent default on the devour-button click event
    event.preventDefault();

    // Store the id of the burger being eaten from the data-id attribute
    const id = $(this).data("id");

    // Send the PUT request using the id of the burger being eaten
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT"
    }).then(
      () => {
        // Reload the page to get the updated list of burgers
        location.assign("/");
      }
    );
  });

  // Listener for the form submit

});
