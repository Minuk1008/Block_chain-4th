?      
u?A
? E?????2r??e??ޠ?NR!??tQr?jL[??y??Sh????,9?I`4???X⋴?r?[?i?	????!>? ܙ??H7?pJ?{?U?Yğ?C??gt??NB???L=?7??;~5 @Ͱ??Jg?ƴ??;??w"k?????h??2S_?]yO??@Vw1?7|$?Beo?????w??  );
};

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_receive", function() {
    console.log("data received success");
})
eventEmitter.emit("connection");

console.log("Program finished !");