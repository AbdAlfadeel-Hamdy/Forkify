import View from './View.js';
import icons from '../../img/icons.svg';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query! Please try again ;)';
  _message = '';
  _generateMarkup() {
    return this._data.reduce(this._generateMarkupPreview, '');
  }
  _generateMarkupPreview(acc, cur) {
    const id = window.location.hash.slice(1);
    return `${acc} <li class="preview ${
      id === cur.id ? 'preview__link--active' : ''
    }">
    <a class="preview__link" href="#${cur.id}">
      <figure class="preview__fig">
        <img src="${cur.image}" alt="${cur.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${cur.title}</h4>
        <p class="preview__publisher">${cur.publisher}</p>
        <div class="preview__user-generated">
        </div>
      </div>
    </a>
  </li>`;
  }
}

export default new ResultsView();
