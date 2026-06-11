import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';
import {generateUniqueIdWithTimestamp} from '../../utils/generate-unique-id-with-timestamp';

@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css',
})
export class WelcomeSectionComponent {
  private readonly _modalCotrollerService = inject(ModalControllerService);

  constructor() {
    console.log(generateUniqueIdWithTimestamp());
  }
  openNewTaskModal() {
    const dialogRef = this._modalCotrollerService.openNewTaskModal();
    dialogRef.closed.subscribe((taskForm) => {
      console.log('Tarefa criada', taskForm);
    });
  }
}
