import React from "react";
import styles from './Form.module.css'
import useSelect from "../../hooks/useSelect";

const Form = ({saveCategory}) => {

  const OPTIONS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Business'},
    { value: 'entertainment', label: 'Entertainment'},
    { value: 'health', label: 'Health'},
    { value: 'science', label: 'Science'},
    { value: 'sports', label: 'Sports'},
    { value: 'technology', label: 'Technology'},
  ]


  const [category, SelectNews] = useSelect(OPTIONS[0].value, OPTIONS);

  const searchNews = e => {
    e.preventDefault();

    saveCategory(category);
  }

  
  return (
    <div className={`row ${styles.searcher}`}>
      <div className="col s12 m8 offset-m2">
        <form action="" onSubmit={searchNews}>
          <h2 className={styles.heading}>Find News by Category</h2>
          <SelectNews></SelectNews>
          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles.btn_block}`}
              value="search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
