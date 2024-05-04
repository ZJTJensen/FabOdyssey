import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FabDbService } from '../service/fabDb.service';
import { UserService } from '../service/user.service';
import { CardSelectComponent } from '../card-select/card-select.component';
import { Card } from 'fab-cards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, CardSelectComponent],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {
  @Input() userInfo: any;
  @Input() limiters: any;
  @Output() quit = new EventEmitter<string>();
  @Output() selectedCard = new EventEmitter<Card>();
  @Output() increaseLevel = new EventEmitter<Card>();

  public deckService: FabDbService;
  public userService: UserService;
  public listOfUsersInBracket: Array<any> = [];
  constructor(deckService: FabDbService, userService: UserService) {
    this.deckService = deckService,
    this.userService = userService
  }
  public ngOnInit(): void {
    this.getUsersInBracket(this.userInfo.user);
  }
  increaseUserLevel() {
    this.increaseLevel.emit();
  }
  public quitFunc(event: string) {
    this.quit.emit(event);
  }
  public saveSelectedCardFunc(event: Card) {
    this.selectedCard.emit(event)
  }
  public getUsersInBracket(users: any) {
    this.listOfUsersInBracket = [0, 2]
    return true;
  }

}
