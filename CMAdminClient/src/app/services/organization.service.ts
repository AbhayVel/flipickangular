import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnsDetails } from '../models/table-template-model';

   
@Injectable({
  providedIn: 'root',
})

export class OrganizationService {
 
  constructor(public router: Router) {}

  organizationsData1: Array<any> = [
            {
                groupID: 4,
                groupName: "HBI",
                totalInstitute: "7",
                instructorCount: "12",
                studentCnt: "4",
                trialStudentCnt: "0",
                paidStudentCnt: "4",
                row: "1",
                totalRowCount: "397"
            },
            {
                groupID: 16,
                groupName: "Altru Health System",
                totalInstitute: "0",
                instructorCount: "0",
                studentCnt: "0",
                trialStudentCnt: "0",
                paidStudentCnt: "0",
                row: "2",
                totalRowCount: "397"
            },
            {
                groupID: 19,
                groupName: "Benefis Health System",
                totalInstitute: "0",
                instructorCount: "0",
                studentCnt: "0",
                trialStudentCnt: "0",
                paidStudentCnt: "0",
                row: "3",
                totalRowCount: "397"
            },
            {
                groupID: 20,
                groupName: "Avita Health System",
                totalInstitute: "0",
                instructorCount: "0",
                studentCnt: "0",
                trialStudentCnt: "0",
                paidStudentCnt: "0",
                row: "4",
                totalRowCount: "397"
            },
            {
                groupID: 29,
                groupName: "Charles Cole Memorial Hospital",
                totalInstitute: "0",
                instructorCount: "0",
                studentCnt: "0",
                trialStudentCnt: "0",
                paidStudentCnt: "0",
                row: "5",
                totalRowCount: "397"
            },
            {
                groupID: 32,
                groupName: "Coulee Medical Center",
                totalInstitute: "0",
                instructorCount: "0",
                studentCnt: "0",
                trialStudentCnt: "0",
                paidStudentCnt: "0",
                row: "6",
                totalRowCount: "397"
            },
            {
                groupID: 34,
                groupName: "Cuyuna Regional Medical Center",
                totalInstitute: "0",
                instructorCount: "0",
                studentCnt: "0",
                trialStudentCnt: "0",
                paidStudentCnt: "0",
                row: "7",
                totalRowCount: "397"
            },
            {
                groupID: 35,
                groupName: "Children's Healthcare of Atlanta",
                totalInstitute: "0",
                instructorCount: "0",
                studentCnt: "0",
                trialStudentCnt: "0",
                paidStudentCnt: "0",
                row: "8",
                totalRowCount: "397"
            },
            {
                groupID: 36,
                groupName: "Cincinnati Children's Hospital Medical Center",
                totalInstitute: "0",
                instructorCount: "0",
                studentCnt: "0",
                trialStudentCnt: "0",
                paidStudentCnt: "0",
                row: "9",
                totalRowCount: "397"
            },
            {
                groupID: 40,
                groupName: "Divine Savior Healthcare",
                totalInstitute: "0",
                instructorCount: "0",
                studentCnt: "0",
                trialStudentCnt: "0",
                paidStudentCnt: "0",
                row: "10",
                totalRowCount: "397"
            }
        ]

    organizationsData: Array<any> = [
        {
            srNo: 1,
            groupConfigLabel: "HBI",
            instituteLabelConfig: "7",
            instructorLabelConfig: "12",
            subScribeStudentLabelConfig: "4",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        },
        {
            srNo: 2,
            groupConfigLabel: "Altru Health System",
            instituteLabelConfig: "8",
            instructorLabelConfig: "12",
            subScribeStudentLabelConfig: "4",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        },
        {
            srNo: 3,
            groupConfigLabel: "Benefis Health System",
            instituteLabelConfig: "9",
            instructorLabelConfig: "11",
            subScribeStudentLabelConfig: "4",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        },
        {
            srNo: 4,
            groupConfigLabel: "Avita Health System",
            instituteLabelConfig: "7",
            instructorLabelConfig: "16",
            subScribeStudentLabelConfig: "5",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        },
        {
            srNo: 5,
            groupConfigLabel: "Charles Cole Memorial Hospital",
            instituteLabelConfig: "7",
            instructorLabelConfig: "17",
            subScribeStudentLabelConfig: "2",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        },
        {
            srNo: 6,
            groupConfigLabel: "Coulee Medical Center",
            instituteLabelConfig: "7",
            instructorLabelConfig: "18",
            subScribeStudentLabelConfig: "3",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        },
        {
            srNo: 7,
            groupConfigLabel: "Children's Healthcare of Atlanta",
            instituteLabelConfig: "7",
            instructorLabelConfig: "19",
            subScribeStudentLabelConfig: "3",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        }
    ]
  
  
  Columns =[
            {
              name: "srNo",
              displayName: "Sr. No.",
              html: false,
              htmlName: "",
              type: "num",
              isSorting: true,
              filter: { isFiltering: true, filterType: "input", filterName: "srNo", filterFrom: "", filterTo: ""}
            },
            {
              name: "groupConfigLabel",
              displayName: "Organization Name",
              html: false,
              htmlName: "",
              type: "cs",
              isSorting: true,
              filter: { isFiltering: true, filterType: "input", filterName: "groupConfigLabel", filterFrom: "", filterTo: ""}
            },
            {
              name: "instituteLabelConfig",
              displayName: "#Facility(s)",
              html: false,
              htmlName: "",
              type: "num",
              isSorting: false,
              filter: { isFiltering: true, filterType: "input", filterName: "instituteLabelConfig", filterFrom: "", filterTo: ""}
            },
            {
              name: "instructorLabelConfig",
              displayName: "#Admin User(s)",
              html: false,
              htmlName: "",
              type: "num",
              isSorting: false,
              filter: { isFiltering: true, filterType: "range", filterName: "instructorLabelConfig", filterFrom: "", filterTo: ""}
            },
            {
              name: "subScribeStudentLabelConfig",
              displayName: "#Subscribed Member",
              html: false,
              htmlName: "",
              type: "num",
              isSorting: false,
              filter: { isFiltering: false, filterType: "input", filterName: "subScribeStudentLabelConfig", filterFrom:"", filterTo: ""}
            },
            {
              name: "trialStudentLabelConfig",
              displayName: "#Trial Member",
              html: false,
              htmlName: "",
              type: "num",
              isSorting: false,
              filter: { isFiltering: false, filterType: "input", filterName: "trialStudentLabelConfig", filterFrom: "", filterTo: ""}
            }
          ];

}