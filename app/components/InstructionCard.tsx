import Instruction from "@/app/models/Instruction.model";

interface Props {
  instruction: Instruction;
  index: number;
  instructionTitle: string;
}

export default function InstructionCard({
  instruction,
  index,
  instructionTitle,
}: Props) {
  return (
    <div className="shadow-sm p-2 h-40 outline outline-gray-100 rounded-lg">
      <div className="flex gap-4 h-1/5 mb-1">
        <h4 className="font-semibold">{index}</h4>
        <p className="font-semibold">{instructionTitle}</p>
      </div>

      <div className="h-4/5 overflow-y-auto">
        <p className="p-1">{instruction.text.slice(0, 250)}</p>
      </div>
    </div>
  );
}
