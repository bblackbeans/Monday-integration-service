abstract class ColumnDto {
  title: string;
  id: string;
  type: string;
}

abstract class GroupDto {
  title: string;
  id: string;
}

export abstract class GetBoardsDto {
  folderId: number;
  name: string;
  columns: ColumnDto[];
  groups: GroupDto[];
  items: any[];
}