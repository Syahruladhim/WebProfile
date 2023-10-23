window.onbeforeunload = () => {
    for (const from of document.getElementsByTagName("form")) {
        from.reset();
    }
}