import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  private readonly _modalCotrollerService = inject(ModalControllerService);

  openEditTaskModal() {
    const dialogRef = this._modalCotrollerService.openEditalTaskModal({
      name: 'nome tarefa',
      description: 'descricao tarefa',
    });

    dialogRef.closed.subscribe((taskForm) => {
      console.log('Tarefa alterada: ', taskForm);
    });
  }
}
