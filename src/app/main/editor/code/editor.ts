export default class Editor {
   e: HTMLTextAreaElement;

   constructor(e: HTMLTextAreaElement = null) {
      this.e = e;
   }

   match(regex: RegExp) {
      return this.e.value.match(regex);
   }
   replace(o: RegExp, n: string) {
      this.e.value = this.e.value.replace(o, n);
   }

   caret = {
      setPos: (start: number, end = start) => {
         this.e.setSelectionRange(start, end);
      },
      getPos: () => {
         return this.e.selectionStart;
      },

      move(n: number) {
         this.setPos(this.getPos() + n);
      },
   };

   formatter = () => {
      this.replace(/"/, "'");
      if (this.match(/\w\/>/)) this.replace(/\w\/>/, ' />');

      if (this.match(/></)) {
         this.replace(/></g, '>\n<');
         this.caret.move(1);
      }
   };
}
