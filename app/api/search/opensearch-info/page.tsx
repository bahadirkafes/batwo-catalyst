import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Rest des Codes bleibt unverändert

interface IndexInfo {
  name: string;
  health: 'Green' | 'Yellow' | 'Red';
  status: string;
  creationDate: string;
  totalSize: string;
  totalDocuments: number;
  deletedDocuments: number;
  primaries: number;
  replicas: number;
}

interface IndexMapping {
  field: string;
  type: string;
}

interface OpenSearchIndexInfoProps {
  indexInfo: IndexInfo;
  indexMappings: IndexMapping[];
}

export default function OpenSearchIndexInfo({ indexInfo, indexMappings }: OpenSearchIndexInfoProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{indexInfo.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Gesundheit</p>
              <Badge variant={indexInfo.health === 'Green' ? "success" : indexInfo.health === 'Yellow' ? "warning" : "destructive"}>
                {indexInfo.health}
              </Badge>
            </div>
            <div>
              <p className="text-sm font-medium">Status</p>
              <p>{indexInfo.status}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Erstellungsdatum</p>
              <p>{indexInfo.creationDate}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Gesamtgröße</p>
              <p>{indexInfo.totalSize}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Gesamtdokumente</p>
              <p>{indexInfo.totalDocuments}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Gelöschte Dokumente</p>
              <p>{indexInfo.deletedDocuments}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Primäre Shards</p>
              <p>{indexInfo.primaries}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Replikas</p>
              <p>{indexInfo.replicas}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Index-Mappings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feld</TableHead>
                <TableHead>Typ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {indexMappings.map((mapping) => (
                <TableRow key={mapping.field}>
                  <TableCell>{mapping.field}</TableCell>
                  <TableCell>{mapping.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}