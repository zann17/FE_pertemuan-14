import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovie.module.css";
import Button from "../ui/Button/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addmovie } from "../../features/MovieSlice/index";

// Menangkap props
function AddMovieForm(props) {
  
  const dispatch = useDispatch();

  //Membuat state object
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  // Membuat state untuk error input form add movie form
  const [formError, setFormError] = useState({
    isTitleError: false,
    isDateError: false,
    isPosterError: false,
    isTypeError: false
  });


  // Membuat funsi handeChange untuk hande semua input form
  function handleChange(e){
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  
  // Membuat state object formData
  const { title, date, poster, type } = formData;

  // Membuat state object formError
  const {isTitleError, isDateError, isPosterError, isTypeError} = formError;

  function validate(){
       // Jika title kosong, set isTitleError true
       if (title === "") {
          setFormError({
            ...formError,
            isTitleError: true
          });
          return false;
      }
      // Jika date kosong, set isDateError true
      else if (date === "") {
        setFormError({
          ...formError,
          isDateError: true
        });
        return false;
      }
      // Jika Poster kosong, set IsPosterError true
      else if (poster === "") {
        setFormError({
          ...formError,
          isPosterError: true
        });
        return false;
      } 
      // Jika Type tidak dipilih, set IsTypeError true
      else if (type === "") {
        setFormError({
          ...formError,
          isTypeError: true
        });
        return false;
      } 
      else {
        setFormError({
          isTitleError: false,
          isDateError: false,
          isPosterError: false,
          isTypeError: false
        });
        return true;
      }
  }

  // Buat Navigation
  const navigation = useNavigate();


  function submitMovie(){
    const movie = {
      id: nanoid(9),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

      dispatch(addmovie(movie))

      // Redirect navigation ke home
      navigation("/");

  }
  


  function handleSubmit(e) {
    /**
     * Mencegah perilaku default form.
     * Mencegah form direfresh ketika disubmit.
     */
    e.preventDefault();

    validate() && submitMovie();
 
    }
 
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isTitleError && <Alert>Title harus ditambahkan!</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isDateError true maka render error
               */}
              {isDateError && <Alert>Date harus ditambahkan!</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="poster" className={styles.form__label}>
                Poster
              </label>
              <input
                onChange={handleChange}
                id="poster"
                className={styles.form__input}
                name="poster"
                type="text"
                value={poster}
              />
              {isPosterError && <Alert>Poster Harus ditambahkan!</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Type
              </label>
              <select
                id="type"
                className={styles.form__select}
                name="type"
                value={type}
                onChange={handleChange}
                >
                <option value="">~~ Choose Type here ~~</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horor">Horor</option>
                <option value="Comedy">Comedy</option>
                <option value="Fantasy">Fantasy</option>
              </select>
              {isTypeError && <Alert>Type Harus dipilih!</Alert>}
            </div>
            <div>
              <Button full lg >Add Movie</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;