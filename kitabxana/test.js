class Library {
  constructor() {
    this.books = [];
  }
  addBook(item) {
    this.books.push(item);
    console.log(`bu kitab: ${item.title} elave olundu`);
  }
  checkBook(item) {
    let newBook = this.books.find((element) => element.title === item);

    if (newBook) {
      if (newBook.isAvailable) {
        return `${item}:adli kitab movcuddur`;
      } else {
        return `${item}:adli kitab movcud deyil`;
      }
    } else {
      return `${item} adli kitab burada umumiyetle yoxdur`;
    }
  }
  takeBook(item){
    let findbook=this.books.find(find=>find.title===item)

    if(findbook){
        if(findbook.isAvailable){
             findbook.isAvailable=false
             return `${item}: kitab oxucuya verildi`
        }else{
            return `${item}: kitab basqa sexdedir`
        }
    }else{
        return `${item} : axtardiginiz kitab bizde yoxdur`;
    }
  }
  listAviables(){
    let newList= this.books
    .filter(element=>element.isAvailable===true)
    .map(element=>element.title)
    return `bizde olan kitablarin listi: ${newList}`
  }
  bigBook(item){
    let num;
    this.books.sort((a,b)=>b.pages-a.pages)
    let newBig= this.books.find((book=>book.title===item))
    if(newBig){
        num=this.books.indexOf(newBig)+1
    }
    return(`${item} kitabi qalinligina gore ${num} -ci yerdedir`)
  }
}

let library = new Library();

library.addBook({
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  year: 1951,
  pages: 277,
  isAvailable: false,
});
library.addBook({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  pages: 281,
  isAvailable: true,
});
library.addBook({
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813,
  pages: 432,
  isAvailable: true,
});
library.addBook({
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    pages: 635,
    isAvailable: true,
  }),
library.addBook({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    pages: 310,
    isAvailable: true,
  })
library.addBook({
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    year: 1950,
    pages: 767,
    isAvailable: true,
  })
console.log(library.books);

console.log(library.checkBook("nene"));
console.log(library.takeBook("To Kill a Mockingbird"))
console.log(library.listAviables())
console.log(library.bigBook("The Catcher in the Rye"))

// açıqlama 
// 1)checkbook()- bu funksiya nədir?
// funksiyamiza item adinda operator əlavə edirik funksiya daxilində yeni dəyişkəndə find metodundan istifadə edərək
// bizim daxil etdiyimiz parametrə uygun olan kitabi dəyişkəndə saxlaya bilək. sonra axtardigimiz kitabın həqiqətəndə mövcudlugunu
// yoxlamaq üçün ilk şərtimizi veririk və 2 ci şərtimiz ilk şərt dogrulanarsa həmin kitabin kitabxanadamı yoxsa oxucudami oldugunu yoxlayırıq.

// 2)takeBook()- bu funksiya nədir?
// funksiyamıza item adında operator əlavə edirik. yeni dəyişkənlə o kitabı find metodu istifadə edərək axtarıb dəyişkənimizdə saxlayırıq.
// yenədə həmin kitabın həqiqətən mövcud olub olmamagını yoxlayırıq əgər o kitab mövcuddursa onun kitabxanada olmasını yoxlayırıq əgər kitabxanadadırsa 
// onu digər şəxsə verərək isAvailable=false edirik

// 3)listAviables()-bu funksiya nədir?
// burada kitabxanada olan kitabların siyahıya alinmasidir.funksiyaya əlavə parametr qoymaga ehtiyac yoxdur. funnksiya daxilinde yeni dəyişkən yaradırıq
// və bunu axtariş edəcəyimiz arraya bərabər edirik arrayda ilk oncə filtirləmə edək isAvailable=true olan butun kitablari göturək. sonra map metodu ilə 
// bu filtirlənmiş kitabların başlıqlarını götürəcəyik. burada nəyə görə find metodundan isdifadə etmədik çünki find yalniz 
// ilk tapdığı kitabı götürərək. prasesi sonlandıracaq.