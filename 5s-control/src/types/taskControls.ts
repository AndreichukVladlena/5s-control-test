export type TasksControlsProps = {
  filter: string;
  onFilterChange: (filter: string) => void;
  onExport: () => void;
  onImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTask: () => void;
}