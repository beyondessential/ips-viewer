import { useQuery } from "react-query";
import { request } from "./request";

// const SAMPLE_RESULT = {
//   id: "45d1d8bc-5df8-424d-8454-5277b455d96c",
//   resourceType: "Bundle",
//   language: "en-AU",
//   identifier: {
//     system: "urn:oid:2.16.724.4.8.10.200.10",
//     value: "24ee01ae-3a71-4247-94c5-08df4a5c3d70",
//   },
//   type: "document",
//   timestamp: "2023-11-11T19:46:35-05:00",
//   entry: [
//     {
//       fullUrl: "urn:uuid:1989ebe0-cefa-48c7-828b-6ded350e4971",
//       resource: {
//         id: "1989ebe0-cefa-48c7-828b-6ded350e4971",
//         resourceType: "Composition",
//         language: "en-AU",
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml" lang="en-AU" xml:lang="en-AU">This is the Composition for Dorothy Davison.. Please review the data for more detail.</div>',
//         },
//         status: "final",
//         type: {
//           coding: [
//             {
//               system: "http://loinc.org",
//               code: "60591-5",
//               display: "Patient summary Document",
//             },
//           ],
//         },
//         subject: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//         },
//         date: "2023-11-11T19:46:35-05:00",
//         author: [
//           {
//             display:
//               "Tamanu is a free and open-source EHR for low resource and remote settings.",
//           },
//         ],
//         title:
//           "International Patient Summary as of Sun, 12 Nov 2023 00:46:35 GMT",
//         confidentiality: "N",
//         attester: [
//           {
//             mode: "professional",
//             time: "2023-11-11T19:46:35-05:00",
//             party: {
//               display: "Ministry of Health",
//             },
//           },
//         ],
//         event: [
//           {
//             code: [
//               {
//                 coding: [
//                   {
//                     system: "http://terminology.hl7.org/CodeSystem/v3-ActClass",
//                     code: "PCPR",
//                   },
//                 ],
//               },
//             ],
//             period: {
//               end: "2023-11-11T19:46:35-05:00",
//             },
//           },
//         ],
//         section: [
//           {
//             title: "Medication",
//             text: {
//               status: "generated",
//               div: '<div xmlns="http://www.w3.org/1999/xhtml">This is the Medication for Dorothy Davison.. Please review the data for more detail.</div>',
//             },
//             code: {
//               coding: [
//                 {
//                   system: "http://loinc.org",
//                   code: "10160-0",
//                   display: "History of Medication use Narrative",
//                 },
//               ],
//             },
//             entry: [
//               {
//                 reference:
//                   "MedicationStatement/a1dff245-007d-4a58-8bf1-fbd007f30290",
//               },
//             ],
//           },
//           {
//             title: "Allergies and Intolerances",
//             text: {
//               status: "generated",
//               div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Allergies for Dorothy Davison.. Please review the data for more detail.</div>',
//             },
//             code: {
//               coding: [
//                 {
//                   system: "http://loinc.org",
//                   code: "48765-2",
//                   display: "Allergies and adverse reactions Document",
//                 },
//               ],
//             },
//             entry: [
//               {
//                 reference:
//                   "AllergyIntolerance/17d5a798-6b79-4e65-9316-71af0bac5257",
//               },
//             ],
//           },
//           {
//             title: "Active Problems",
//             text: {
//               status: "generated",
//               div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Active Problems for Dorothy Davison.. Please review the data for more detail.</div>',
//             },
//             code: {
//               coding: [
//                 {
//                   system: "http://loinc.org",
//                   code: "11450-4",
//                   display: "Problem list Reported",
//                 },
//               ],
//             },
//             entry: [
//               {
//                 reference: "Condition/9e7b4a1d-0750-4dd9-8528-d2e8954c4ba7",
//               },
//             ],
//           },
//           {
//             title: "Immunizations",
//             text: {
//               status: "generated",
//               div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunizations for Dorothy Davison.. Please review the data for more detail.</div>',
//             },
//             code: {
//               coding: [
//                 {
//                   system: "http://loinc.org",
//                   code: "11369-6",
//                   display: "History of Immunization Narrative",
//                 },
//               ],
//             },
//             entry: [
//               {
//                 reference: "Immunization/c8b1876c-7532-4141-a995-450a79380fe0",
//               },
//               {
//                 reference: "Immunization/fc8c72a9-06c9-4665-8eb9-abf9c4d77c60",
//               },
//               {
//                 reference: "Immunization/eb64bea9-8cae-41e7-8705-a24c78a6501c",
//               },
//               {
//                 reference: "Immunization/f628e0e3-fa44-4fc9-bf8f-b4355d0635b7",
//               },
//               {
//                 reference: "Immunization/0736a97e-aba1-4fd8-b17b-75bb2050e161",
//               },
//               {
//                 reference: "Immunization/ef0f7657-1346-45a4-bc67-ca8b2ff7ead7",
//               },
//               {
//                 reference: "Immunization/dd431d53-5d76-4ac9-acd3-83889240a1f3",
//               },
//               {
//                 reference: "Immunization/b19189d9-9d1b-4d84-97b2-f4541d25c9ca",
//               },
//               {
//                 reference: "Immunization/a2573cd3-2606-4dea-bf4a-b3c2a0f70b72",
//               },
//               {
//                 reference: "Immunization/2a078067-5a77-43fa-a854-043ea01d2fe9",
//               },
//               {
//                 reference: "Immunization/e2592fa1-38cd-4151-b6c3-ba4f7e18ee05",
//               },
//               {
//                 reference: "Immunization/f832ed83-9ad1-43e8-9648-526f43aef169",
//               },
//             ],
//           },
//         ],
//       },
//     },
//     {
//       fullUrl: "urn:uuid:b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//       resource: {
//         id: "b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//         resourceType: "Patient",
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the details for Dorothy Davison. Please review the data for more detail.</div>',
//         },
//         identifier: [
//           {
//             use: "usual",
//             value: "IVXI309611",
//             system:
//               "http://data-dictionary.tamanu-fiji.org/application-reference-number.html",
//           },
//           {
//             use: "official",
//             value: "IVXI309611",
//           },
//           {
//             use: "secondary",
//             value: "IVXI309611",
//           },
//         ],
//         name: [
//           {
//             use: "official",
//             family: "Davison",
//             given: ["Dorothy", "Hulda"],
//           },
//           {
//             use: "nickname",
//             text: "Dora",
//           },
//         ],
//         gender: "female",
//         birthDate: "2005-01-14",
//       },
//     },
//     {
//       fullUrl: "urn:uuid:9e7b4a1d-0750-4dd9-8528-d2e8954c4ba7",
//       resource: {
//         id: "9e7b4a1d-0750-4dd9-8528-d2e8954c4ba7",
//         resourceType: "Condition",
//         subject: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         clinicalStatus: {
//           coding: [
//             {
//               system:
//                 "http://terminology.hl7.org/CodeSystem/condition-clinical",
//               code: "active",
//             },
//           ],
//         },
//         code: {
//           coding: [
//             {
//               system:
//                 "http://hl7.org/fhir/uv/ips/CodeSystem/absent-unknown-uv-ips",
//               code: "no-problem-info",
//               display: "No information about problems",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Condition details for Dorothy Davison for No information about problems. Please review the data for more detail.</div>',
//         },
//       },
//     },
//     {
//       fullUrl: "urn:uuid:a1dff245-007d-4a58-8bf1-fbd007f30290",
//       resource: {
//         id: "a1dff245-007d-4a58-8bf1-fbd007f30290",
//         resourceType: "MedicationStatement",
//         status: "unknown",
//         subject: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         medicationCodeableConcept: {
//           coding: [
//             {
//               system:
//                 "http://hl7.org/fhir/uv/ips/CodeSystem/absent-unknown-uv-ips",
//               code: "no-medication-info",
//               display: "No information about medications",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Medication Statement details for Dorothy Davison for No information about medications. Please review the data for more detail.</div>',
//         },
//       },
//     },
//     {
//       fullUrl: "urn:uuid:17d5a798-6b79-4e65-9316-71af0bac5257",
//       resource: {
//         id: "17d5a798-6b79-4e65-9316-71af0bac5257",
//         resourceType: "AllergyIntolerance",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         clinicalStatus: {
//           coding: [
//             {
//               system:
//                 "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
//               code: "active",
//             },
//           ],
//         },
//         code: {
//           coding: [
//             {
//               system:
//                 "http://hl7.org/fhir/uv/ips/CodeSystem/absent-unknown-uv-ips",
//               code: "no-known-allergies",
//               display: "No known allergies",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Allergy Intolerance details for Dorothy Davison for No known allergies. Please review the data for more detail.</div>',
//         },
//       },
//     },
//     {
//       fullUrl: "urn:uuid:c8b1876c-7532-4141-a995-450a79380fe0",
//       resource: {
//         id: "c8b1876c-7532-4141-a995-450a79380fe0",
//         resourceType: "Immunization",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         vaccineCode: {
//           coding: [
//             {
//               system: "http://nzmt.org.nz",
//               code: "PCV",
//               display: "PCV",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunization details for Dorothy Davison for PCV. Please review the data for more detail.</div>',
//         },
//         status: "entered-in-error",
//         occurrenceDateTime: "2023-04-20T12:07:18-04:00",
//       },
//     },
//     {
//       fullUrl: "urn:uuid:fc8c72a9-06c9-4665-8eb9-abf9c4d77c60",
//       resource: {
//         id: "fc8c72a9-06c9-4665-8eb9-abf9c4d77c60",
//         resourceType: "Immunization",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         vaccineCode: {
//           coding: [
//             {
//               system: "http://nzmt.org.nz",
//               code: "BCG",
//               display: "BCG",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunization details for Dorothy Davison for BCG. Please review the data for more detail.</div>',
//         },
//         status: "entered-in-error",
//         occurrenceDateTime: "2023-04-20T16:38:19-04:00",
//       },
//     },
//     {
//       fullUrl: "urn:uuid:eb64bea9-8cae-41e7-8705-a24c78a6501c",
//       resource: {
//         id: "eb64bea9-8cae-41e7-8705-a24c78a6501c",
//         resourceType: "Immunization",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         vaccineCode: {
//           coding: [
//             {
//               system: "http://nzmt.org.nz",
//               code: "OPV",
//               display: "OPV",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunization details for Dorothy Davison for OPV. Please review the data for more detail.</div>',
//         },
//         status: "not-done",
//         occurrenceDateTime: "2023-04-24T18:21:16-04:00",
//       },
//     },
//     {
//       fullUrl: "urn:uuid:f628e0e3-fa44-4fc9-bf8f-b4355d0635b7",
//       resource: {
//         id: "f628e0e3-fa44-4fc9-bf8f-b4355d0635b7",
//         resourceType: "Immunization",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         vaccineCode: {
//           coding: [
//             {
//               system: "http://nzmt.org.nz",
//               code: "PCV",
//               display: "PCV",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunization details for Dorothy Davison for PCV. Please review the data for more detail.</div>',
//         },
//         status: "entered-in-error",
//         occurrenceDateTime: "2023-04-20T16:46:24-04:00",
//       },
//     },
//     {
//       fullUrl: "urn:uuid:0736a97e-aba1-4fd8-b17b-75bb2050e161",
//       resource: {
//         id: "0736a97e-aba1-4fd8-b17b-75bb2050e161",
//         resourceType: "Immunization",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         vaccineCode: {
//           coding: [
//             {
//               system: "http://nzmt.org.nz",
//               code: "HBV",
//               display: "HBV",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunization details for Dorothy Davison for HBV. Please review the data for more detail.</div>',
//         },
//         status: "completed",
//         occurrenceDateTime: "2023-04-24T14:22:22-04:00",
//       },
//     },
//     {
//       fullUrl: "urn:uuid:ef0f7657-1346-45a4-bc67-ca8b2ff7ead7",
//       resource: {
//         id: "ef0f7657-1346-45a4-bc67-ca8b2ff7ead7",
//         resourceType: "Immunization",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         vaccineCode: {
//           coding: [
//             {
//               system: "http://nzmt.org.nz",
//               code: "COVID-19-Pfizer",
//               display: "Comirnaty",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunization details for Dorothy Davison for Comirnaty. Please review the data for more detail.</div>',
//         },
//         status: "completed",
//         occurrenceDateTime: "2023-05-05T15:53:15-04:00",
//       },
//     },
//     {
//       fullUrl: "urn:uuid:dd431d53-5d76-4ac9-acd3-83889240a1f3",
//       resource: {
//         id: "dd431d53-5d76-4ac9-acd3-83889240a1f3",
//         resourceType: "Immunization",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         vaccineCode: {
//           coding: [
//             {
//               system: "http://nzmt.org.nz",
//               code: "COVID-19-AstraZeneca",
//               display: "Vaxzevria",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunization details for Dorothy Davison for Vaxzevria. Please review the data for more detail.</div>',
//         },
//         status: "completed",
//         occurrenceString: "unknown",
//       },
//     },
//     {
//       fullUrl: "urn:uuid:b19189d9-9d1b-4d84-97b2-f4541d25c9ca",
//       resource: {
//         id: "b19189d9-9d1b-4d84-97b2-f4541d25c9ca",
//         resourceType: "Immunization",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         vaccineCode: {
//           coding: [
//             {
//               system: "http://nzmt.org.nz",
//               code: "BCG",
//               display: "BCG",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunization details for Dorothy Davison for BCG. Please review the data for more detail.</div>',
//         },
//         status: "completed",
//         occurrenceDateTime: "2023-05-12T12:08:47-04:00",
//       },
//     },
//     {
//       fullUrl: "urn:uuid:a2573cd3-2606-4dea-bf4a-b3c2a0f70b72",
//       resource: {
//         id: "a2573cd3-2606-4dea-bf4a-b3c2a0f70b72",
//         resourceType: "Immunization",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         vaccineCode: {
//           coding: [
//             {
//               system: "http://nzmt.org.nz",
//               code: "OPV",
//               display: "OPV",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunization details for Dorothy Davison for OPV. Please review the data for more detail.</div>',
//         },
//         status: "completed",
//         occurrenceString: "unknown",
//       },
//     },
//     {
//       fullUrl: "urn:uuid:2a078067-5a77-43fa-a854-043ea01d2fe9",
//       resource: {
//         id: "2a078067-5a77-43fa-a854-043ea01d2fe9",
//         resourceType: "Immunization",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         vaccineCode: {
//           coding: [
//             {
//               system: "http://nzmt.org.nz",
//               code: "HBV",
//               display: "HBV",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunization details for Dorothy Davison for HBV. Please review the data for more detail.</div>',
//         },
//         status: "completed",
//         occurrenceDateTime: "2023-05-05T16:07:51-04:00",
//       },
//     },
//     {
//       fullUrl: "urn:uuid:e2592fa1-38cd-4151-b6c3-ba4f7e18ee05",
//       resource: {
//         id: "e2592fa1-38cd-4151-b6c3-ba4f7e18ee05",
//         resourceType: "Immunization",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         vaccineCode: {
//           coding: [
//             {
//               system: "http://nzmt.org.nz",
//               code: "COVID-19-Pfizer",
//               display: "Comirnaty",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunization details for Dorothy Davison for Comirnaty. Please review the data for more detail.</div>',
//         },
//         status: "completed",
//         occurrenceDateTime: "2023-06-01T11:53:33-04:00",
//       },
//     },
//     {
//       fullUrl: "urn:uuid:f832ed83-9ad1-43e8-9648-526f43aef169",
//       resource: {
//         id: "f832ed83-9ad1-43e8-9648-526f43aef169",
//         resourceType: "Immunization",
//         patient: {
//           reference: "Patient/b612e53b-f0df-44f2-9adf-0efbce2b2d9f",
//           display: "Dorothy Davison",
//         },
//         vaccineCode: {
//           coding: [
//             {
//               system: "http://nzmt.org.nz",
//               code: "PCV",
//               display: "PCV",
//             },
//           ],
//         },
//         text: {
//           status: "generated",
//           div: '<div xmlns="http://www.w3.org/1999/xhtml">These are the Immunization details for Dorothy Davison for PCV. Please review the data for more detail.</div>',
//         },
//         status: "not-done",
//         occurrenceDateTime: "2023-08-02T15:07:21-04:00",
//       },
//     },
//   ],
// };

export const useIPS = ({ url }) => {
  if (!url) {
    url = 'https://public.tamanu.io/ips-demo/IPS_58170297-d96b-45b6-bb27-ba9522b87be2_1700456070120.json';
  }
  return useQuery([url], () => request(url), { enabled: !!url });
  // return { data: SAMPLE_RESULT };
};
