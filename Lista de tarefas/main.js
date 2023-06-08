$(document).ready(function () {
    $("#task-form").on("submit", function (e) {
        e.preventDefault();

        let taskName = $("#task-input").val().trim();

        if (taskName !== "") {
            let taskItem = $("<li></li>");
            let taskNameElement = $("<span></span>")
                .text(taskName)
                .addClass("task-name");
            let deleteButton = $("<span></span>")
                .text("X")
                .addClass("delete-btn");

            taskItem.append(taskNameElement, deleteButton);

            taskItem.on("click", function () {
                $(this).toggleClass("completed-task");
            });

            deleteButton.on("click", function (e) {
                e.stopPropagation();
                $(this).parent().remove();
            });

            $("#task-list").append(taskItem);
            $("#task-input").val("");
        }
    });
});
