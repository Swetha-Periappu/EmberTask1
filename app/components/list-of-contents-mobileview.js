import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ListOfContentsMobileviewComponent extends Component {
  @tracked toshowlist = false;

  @action
  toggle() {
    if (this.toshowlist === false) {
      this.toshowlist = true;
    } else {
      this.toshowlist = false;
    }
  }
}
