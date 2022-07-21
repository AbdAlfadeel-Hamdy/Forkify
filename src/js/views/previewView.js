import View from './View.js';
import icons from '../../img/icons.svg';
class PreviewView extends View {
  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return `<li class="preview ${
      id === this._data.id ? 'preview__link--active' : ''
    }">
    <a class="preview__link" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.image}" alt="${this._data.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title}</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
        <div class="preview__user-generated">
        </div>
      </div>
    </a>
  </li>`;
  }
}

export default new PreviewView();
