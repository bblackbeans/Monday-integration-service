import { Entity } from '../core/entity';
import { Column } from './column';
import { Group } from './group';

export type BoardProps = {
  name: string;
  columns: Column[];
  groups: Group[];
  items: any[];
};
export class Board extends Entity<BoardProps> {
  private constructor(props: BoardProps, id?: string) {
    super(props, id);
  }

  static create(props: BoardProps, id?: string) {
    const board = new Board(props, id);
    return board;
  } 
}
