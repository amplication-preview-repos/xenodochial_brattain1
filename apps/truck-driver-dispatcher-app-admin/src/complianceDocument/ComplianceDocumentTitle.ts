import { ComplianceDocument as TComplianceDocument } from "../api/complianceDocument/ComplianceDocument";

export const COMPLIANCEDOCUMENT_TITLE_FIELD = "id";

export const ComplianceDocumentTitle = (
  record: TComplianceDocument
): string => {
  return record.id?.toString() || String(record.id);
};
