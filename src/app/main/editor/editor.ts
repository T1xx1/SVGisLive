export default class Editor {
   e: HTMLTextAreaElement;

   constructor(e: HTMLTextAreaElement = null) {
      this.e = e;
   }

   replace(o: string, n: string) {
      this.e.value = this.e.value.replace(o, n);
   }

   moveCaret(n: number) {
      this.setCaretPos(this.getCaretPos() + n);
   }
   setCaretPos(start: number, end = start) {
      this.e.setSelectionRange(start, end);
   }
   getCaretPos() {
      return this.e.selectionStart;
   }
}
