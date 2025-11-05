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
    this._modalCotrollerService.openEditalTaskModal({
      name: 'nome tarefa',
      description: 'descricao tarefa',
    });
  }
}
