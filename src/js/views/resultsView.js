import View from './View.js';
import icons from '../../img/icons.svg';
import previewView from './previewView.js';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query! Please try again ;)';
  _message = '';
  _generateMarkup() {
    return this._data.map(res => previewView.render(res, false), '');
  }
}

export default new ResultsView();
