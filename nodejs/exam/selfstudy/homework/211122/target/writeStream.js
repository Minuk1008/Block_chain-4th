�      
mP;O1�O��`n�U*�	�"��:0��CS��8>���q��R3ٟ�=bCbp	��c�rI-n�Ɣ���3�+���,�ͧ&����՚u��,<��İ��s�fB����oH�<��"�[�`���I�t���_��N�q�C�I���`U[�]���/�p�����\��9Ci�~	������:��`�pr)|ڪ%�)�-��6 /_/�8�����������r�D���� ��l�m�v�=�F5>e���s���  riterStream.end();

writerStream.on('finish', function() {
    console.log("Finished write file !");
});

writerStream.on("error", function(err) {
    console.log(err.stack);
});

console.log("WriteStream file write finished !");