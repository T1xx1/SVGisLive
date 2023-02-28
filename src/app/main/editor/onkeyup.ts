export default editor => {
   let format = () => {
      let caretPos = editor.getCaretPos();

      if (editor.e.value.match(/"/)) editor.replace(/"/, "'");
      if (editor.e.value.match(/(?<![ ])\/>/)) editor.replace(/(?<![ ])\/>/, ' />');

      editor.setCaretPos(caretPos);
      
      if (editor.e.value.match(/></)) {
         editor.replace(/></g, '>\n<');
         editor.moveCaret(1);
      }

      /*if (editor.e.value[caretPos - 1] === '/') {
         editor.replace(/   <\//, '</');

         caret.setPos(caretPos);
      }*/
   };

   format();
};
