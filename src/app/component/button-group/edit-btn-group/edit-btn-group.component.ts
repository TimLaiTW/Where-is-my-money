import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action, ActionResponse } from 'src/app/type';

@Component({
  selector: 'app-edit-btn-group',
  templateUrl: './edit-btn-group.component.html',
  styleUrls: ['./edit-btn-group.component.scss']
})
export class EditBtnGroupComponent {
  @Input() id?: string;
  @Output() editEvent = new EventEmitter<ActionResponse>();

	onAction(action: string){
    if (action === 'add'){
      this.editEvent.emit({id: this.id, action: Action.ADD});
    }
    else if (action === 'edit'){
      this.editEvent.emit({id: this.id, action: Action.EDIT});
    }
    else if (action === 'remove'){
      this.editEvent.emit({id: this.id, action: Action.REMOVE});
    }
	}
}
