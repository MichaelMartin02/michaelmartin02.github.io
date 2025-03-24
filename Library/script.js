document.addEventListener("DOMContentLoaded", (e) => {
	//Objects
	const library = [];
	let libgenres = [];
	function Book(title, author, pageNum, genres, hasRead, coverSrc) {
		this.uuid = crypto.randomUUID();
		this.title = title;
		this.author = author;
		this.pageNum = pageNum;
		this.hasRead = hasRead;
		this.coverSrc = coverSrc;
		this.genres = genres;
		this.addToLibrary = function () {
			library.push(this);
		};
	}
	//Toggle Addition form//
	const addBookBtn = document.querySelector("#addBookBtn");
	const addBookFormWrapper = document.querySelector("#addBookFormWrapper");
	function toggleAddForm() {
		addBookFormWrapper.classList.toggle("minimized");
		addBookBtn.innerText = addBookFormWrapper.classList.contains("minimized")
			? "+"
			: "-";
	}
	addBookBtn.addEventListener("click", () => {
		toggleAddForm();
	});
	//Get Add form information
	const addBookForm = document.querySelector("#addNewBookForm");
	let title, author, genres, pageNum, hasRead, coverSrc, thisBook;
	addBookForm.addEventListener("submit", (e) => {
		e.preventDefault();
		coverSrc = document.querySelector("#addImg").value;
		validateForm(coverSrc);

		if (validateForm(coverSrc)) {
			title = document.querySelector("#addTitle").value;
			author = document.querySelector("#addAuthor").value;
			genres = document.querySelector("#addGenres").value;
			pageNum = parseInt(document.querySelector("#addPageCount").value);
			hasRead = document.querySelector("#addReadStatus").value;
			thisBook = new Book(title, author, pageNum, genres, hasRead, coverSrc); //thisBook is now a new book
			toggleAddForm();
			thisBook.addToLibrary();
			updateDisplay(library);
		} //UpdateDisplay makes appends generated HTML for each book object
	});

	//Form validation for url//

	function validateForm() {
		const imageUrl = document.querySelector("#addImg").value;

		if (!isValidImageUrl(imageUrl)) {
			alert("Please enter a valid image URL.");
			return false;
		}

		return true;
	}

	function isValidImageUrl(url) {
		return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);
	}
	// function checkGenres(genres) {
	// 	//If genre lists doesn't exist in the array, push it in//
	// 	genresArray = genres.split(",");
	// 	genresArray.forEach((genre) => {
	// 		if (!libgenres.includes(genre)) {
	// 			libgenres.push(genre);
	// 		}
	// 	});
	// }
	function updateGenresArray(book) {
		const genres = book.genres.split(",");
		genres.forEach((genre) => {
			if (!libgenres.includes(genre)) {
				libgenres.push(genre);
				console.log(libgenres);
				dropdown.innerHTML = '<option value="All">All Genres</option>';
				updateGenresDropdown();
			} else {
				return;
			}
		});
	}
	function updateGenresDropdown() {
		dropdown.innerHTML = '<option value="All">All Genres</option>';
		libgenres.forEach((genre) => {
			const option = document.createElement("option");
			option.setAttribute("value", genre);
			option.innerText = genre;
			dropdown.appendChild(option);
		});
	}
	//Create a book html element
	function updateDisplay(lib) {
		const bookDisplay = document.getElementById("bookDisplay");
		const booksDisplayed = Array.from(
			document.querySelectorAll("#bookDisplay div")
		);
		booksDisplayed.forEach((existingBook) => {
			existingBook.remove();
		});
		lib.forEach((book) => {
			bookDisplay.appendChild(bookFactory(book));
			updateGenresArray(book);
		});
	}
	function bookFactory(thisBook) {
		//Create elements
		let bookWrapper = document.createElement("div"); //BookWrapper
		let bookFront = document.createElement("div"); //->BookFront
		let cover = document.createElement("img"); //-->Img.coverImg
		let infoSection = document.createElement("section");
		let title = document.createElement("h2");
		let author = document.createElement("h3");
		let pages = document.createElement("p");
		let genres = document.createElement("p");
		let buttonWrapper = document.createElement("section");
		let editBtn = document.createElement("button");
		let readBtn = document.createElement("button");
		//Set BookWrapper Attributes
		bookWrapper.classList.add("bookWrapper");
		bookWrapper.setAttribute("data-genres", thisBook.genres);
		if (thisBook.hasRead === "Y") {
			bookWrapper.setAttribute("data-read", true);
		} else {
			bookWrapper.setAttribute("data-read", false);
		}
		bookWrapper.setAttribute("data-uuid", thisBook.uuid);
		//BookFront Attributes
		bookFront.classList.add("bookFront");
		bookFront.setAttribute("data-uuid", thisBook.uuid);
		//Cover Img Attributes
		cover.classList.add("coverImg");
		cover.setAttribute("src", thisBook.coverSrc);
		cover.setAttribute("alt", `${thisBook.title} Cover`);

		//Info Section
		infoSection.classList.add("infoWrapper");
		infoSection.setAttribute("data-uuid", thisBook.uuid);
		//Set inner texts
		title.innerText = thisBook.title;
		author.innerText = thisBook.author;
		pages.innerText = thisBook.pageNum + " Pages";
		genres.innerText = "Genres:" + thisBook.genres;
		infoSection.append(title, author, pages, genres);
		//Button Wrapper
		buttonWrapper.setAttribute("data-uuid", thisBook.uuid);
		editBtn.classList.add("editButton");
		editBtn.setAttribute("type", "button");
		editBtn.setAttribute("aria-label", `Edit ${thisBook.title}`);
		editBtn.innerText = "Edit Book";
		editBtn.setAttribute("data-uuid", thisBook.uuid);

		readBtn.classList.add("readButton");
		if (
			thisBook.hasRead == "Y" ||
			thisBook.hasRead == "Yes" ||
			thisBook.hasRead == "yes"
		) {
			readBtn.classList.add("checked");
			readBtn.innerText = "Have Read";
		} else {
			readBtn.innerText = "Have Not Read";
		}
		readBtn.setAttribute("type", "button");
		readBtn.setAttribute(
			"aria-label",
			`Toggle read status for ${thisBook.title}`
		);
		readBtn.setAttribute("data-uuid", thisBook.uuid);
		readBtn.addEventListener("click", () => {
			readBtn.classList.toggle("checked");
			thisBook.hasRead = thisBook.hasRead !== "Y" ? "Y" : "N";
			readBtn.innerText =
				thisBook.hasRead == "N" ? "Have Not Read" : "Have Read";
		});
		buttonWrapper.append(editBtn, readBtn);
		//Stich everything together
		bookFront.append(cover, infoSection, buttonWrapper); //BookFront -> Img
		bookWrapper.appendChild(bookFront); //BookWrapper -> BookFront
		editBtn.addEventListener("click", () => editBook(thisBook));
		return bookWrapper;
	}

	function editBook(thisBook) {
		//Function for edit buttons
		const bookWrapper = document.querySelector(
			`.bookWrapper[data-uuid ='${thisBook.uuid}']`
		);
		const bookFront = document.querySelector(
			`.bookFront[data-uuid ='${thisBook.uuid}']`
		);
		const bookTitle = document.querySelector(
			`.infoWrapper[data-uuid ='${thisBook.uuid}'] h2`
		);
		const bookAuthor = document.querySelector(
			`.infoWrapper[data-uuid ='${thisBook.uuid}'] h3`
		);
		const bookPages = document.querySelector(
			`.infoWrapper[data-uuid ='${thisBook.uuid}'] p:first-child`
		);
		const bookGenres = document.querySelector(
			`.infoWrapper[data-uuid ='${thisBook.uuid}'] p:last-child`
		);
		bookFront.style.display = "none";
		const editForm = document.createElement("form");
		editForm.classList.add("editForm");
		const editTitle = document.createElement("input");
		editTitle.setAttribute("type", "text");
		editTitle.setAttribute("placeholder", "Title");
		editTitle.setAttribute("aria-required", "true");
		editTitle.setAttribute("required", true);
		const editAuthor = document.createElement("input");
		editAuthor.setAttribute("type", "text");
		editAuthor.setAttribute("placeholder", "Author");
		editAuthor.setAttribute("aria-required", "true");
		editAuthor.setAttribute("required", true);
		const editGenres = document.createElement("input");
		editGenres.setAttribute("type", "text");
		editGenres.setAttribute("placeholder", "Genres");
		editGenres.setAttribute("aria-required", "true");
		editGenres.setAttribute("required", true);
		const editPages = document.createElement("input");
		editPages.setAttribute("type", "number");
		editPages.setAttribute("placeholder", "Page Count");
		editPages.setAttribute("aria-required", "true");
		editPages.setAttribute("required", true);
		const editCover = document.createElement("input");
		editCover.setAttribute("type", "text");
		editCover.setAttribute("placeholder", "Cover Img Url");
		editCover.setAttribute("aria-required", "true");
		editCover.setAttribute("required", true);
		const editSubmit = document.createElement("button");
		editSubmit.setAttribute("type", "submit");
		editSubmit.setAttribute("aria-label", "Submit Edits");
		editSubmit.innerText = "Submit";

		editForm.append(
			editTitle,
			editAuthor,
			editGenres,
			editPages,
			editCover,
			editSubmit
		);
		editForm.addEventListener("submit", () => {
			//Submit Edit Form

			coverSrc = editCover.value;
			bookFront.style.display = "block";
			validateForm(coverSrc);

			if (validateForm(coverSrc)) {
				thisBook.title = editTitle.value;
				thisBook.author = editAuthor.value;
				thisBook.genres = editGenres.value;
				thisBook.pageNum = parseInt(editPages.value);
				thisBook.coverSrc = coverSrc;
			}
			updateDisplay(library);
			updateGenresArray(thisBook);
			updateGenresDropdown();
		});

		bookWrapper.appendChild(editForm);
	}
	///Filter
	const dropdown = document.querySelector("#genres");
	dropdown.addEventListener("change", (e) => {
		const genreSel = dropdown.value;
		const filteredLib = [];
		if (genreSel == "All") {
			updateDisplay(library);
			return;
		}
		library.forEach((book) => {
			if (book.genres.includes(genreSel)) {
				filteredLib.push(book);
			}
		});
		updateDisplay(filteredLib);
	});
	// //Search
	// const search = document.querySelector("#search");
	// search.addEventListener("search", (e) => {
	// 	e.preventDefault();
	// 	console.log("test");
	// });
});
