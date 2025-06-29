import { Component } from '@angular/core';
import { TranslatePipe } from "../pipes/translate.pipe";

@Component({
  selector: 'app-minecraft',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './minecraft.component.html',
  styleUrl: './minecraft.component.css'
})
export class MinecraftComponent {
minecraft: any;

}
