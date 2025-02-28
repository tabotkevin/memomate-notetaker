import { type FC } from "react";
import type { api, RouterOutputs } from "~/utils/api";
import { SheetComponent } from "../ui/sheet";
import Note from "./note";
import NoteView from "./noteView";
import { Edit3 } from "lucide-react";
import NoteEditor from "./NoteEditor";
import { Skeleton } from "../ui/skeleton";

type NoteType = RouterOutputs["note"]["getAll"][0];

interface NoteListProps {
  notes: NoteType[];
  isLoading: boolean;
  onUpdate: ReturnType<typeof api.note.update.useMutation>;
  onDelete: ReturnType<typeof api.note.delete.useMutation>;
}

const NoteList: FC<NoteListProps> = ({ isLoading, notes, onUpdate, onDelete }) => {
  return (
    <ul className="flex flex-wrap gap-4">

      {isLoading && <Skeleton className="h-56 w-56 bg-slate-300 rounded-2xl"/>}
        
      {notes &&
        notes.map((note) => (
          <div key={note.id} className="relative">
            <SheetComponent
              trigger={<Note note={note} />}
              content={
                <NoteView
                  note={note}
                  onDelete={(id: string) => {
                    onDelete.mutate({
                      id,
                    });
                  }}
                />
              }
            />

            {/* Editor */}
            <SheetComponent
              trigger={
                <div className="absolute bottom-4 right-4 grid cursor-pointer place-content-center rounded-full bg-slate-800 p-2 transition-colors hover:bg-slate-700">
                  <Edit3 color="#f2f2f2" size={20} />
                </div>
              }
              content={
                <NoteEditor
                  onSave={(title: string, content: string) => {
                    onUpdate.mutate({
                      title,
                      content,
                      noteId: note.id ?? "",
                    });
                  }}
                  defaultTitle="Edit Note"
                  defaultNote={note}
                />
              }
            />
          </div>
        ))}
    </ul>
  );
};

export default NoteList;
