import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css',
})
export class WelcomeSectionComponent {
  private readonly _modalCotrollerService = inject(ModalControllerService);

  openNewTaskModal() {
    const dialogRef = this._modalCotrollerService.openNewTaskModal();
    dialogRef.closed.subscribe((taskForm) => {
      console.log('Tarefa criada', taskForm);
    });
  }
}
