import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupComponent } from 'src/app/feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from 'src/app/feature/library/popup/PopUpConfig';
import { Project } from 'src/app/models/Project';
import { SortModel } from 'src/app/models/sort-model';

@Component({
  
  selector: 'qdn-kj-author',
  templateUrl: './kj-author.component.html',
  styleUrls: ['./kj-author.component.css']
})

export class KjAuthorComponent implements OnInit {

  @ViewChild('popup') popup?: PopupComponent;

  constructor() { }

  project: Project = new Project();

  arrayAuthor: Array<any>=[

    {
      id: 1,      
      name: "Chetan Bhagat",
      bDate: "22 April 1974",
      address:"Punjab",      
      books:"The 3 Mistakes of My Life, Five Point Someone"
    },
    {
      id: 2,      
      name: "Vikram Chandra",
      bDate: "23 July 1961",
      address:"Delhi",      
      books:"Sacred Games, Red Earth and Pouring Rain"
    },
    {
      id: 3,      
      name: "Arundhati Roy",
      bDate: "24 Nov. 1959",
      address:"Meghalaya",      
      books:"The End of Imagination, The Cost of Living"
    },
    {
      id: 4,      
      name: "Khushwant Singh",
      bDate: "2 February 1915",
      address:"Punjab",      
      books:"Train to Pakistan,The History of Sikhs"
    },
    {
      id: 5,      
      name: "R.K.Narayan",
      bDate: "10 Oct. 1906",
      address:"Madras",      
      books:"Malgudi Days, The Guide"
    },
    {
      id: 6,      
      name: "Kiran Desai",
      bDate: "3 Sep. 1971",
      address:"Delhi",      
      books:"The Inheritance of Loss"
    },
    {
      id: 7,      
      name: "Vikram Seth",
      bDate: "20 June 1952",
      address:"Calcutta",      
      books:"A Suitable Boy, Two Lives"
    },
    {
      id: 8,      
      name: "Bipan Chandra",
      bDate: "24 May 1928",
      address:"Punjab",      
      books:"The Epic Struggle, In the Name of Democracy"
    },
    {
      id: 9,
      name: "Rabindranath Tagore",
      bDate: "7 May 1861",
      address:"Calcutta",      
      books:"Heart of God, Gitanjali"
    },
    {
      id: 10,      
      name: "Aravind Adiga",
      bDate: "23 Oct. 1974",
      address:"Chennai",      
      books:"The White Tiger, Last Man in Tower"
    },
    {
      id: 11,      
      name: "Ruskin Bond",
      bDate: "19 May 1934",
      address:"Punjab",      
      books:"The Room on the Roof, The Blue Umbrella"
    },
    {
      id: 12,      
      name: "Amish Tripathi",
      bDate: "18 Oct. 1974",
      address:"Mumbai",      
      books:"The Immortals of Meluha, The Secret of the Nagas"
    }  
    
]

filterObject: any = {

  data: [],
  rows: [],
  filter: {
    id: {
      columnName: 'id',
      value: '',
      type: 'num'
    },
    name: {
      columnName: 'name',
      value: '',
      type: 'cs'
    },
    bDate: {
      columnName: 'bDate',
      value: '',
      type: 'cs'
    }   
  },
  paging: [],
  currentPage: 1,
  pageSize: 10
}
  
sortObj: SortModel={
  
  orderBy: -1,
  columnName:'id',
  sortType: 'num',
  condition: null
}

columns = [
  {
    name: 'name',
    displayName: 'Name',
    type: 'cs',
    isSorting: true,
    filter: {
      isFiltering: true,
      filterType: 'input',
    
    }
  },
  {
    name: 'bDate',
    displayName: 'BDate',
    type: 'cs',
    isSorting: true,
    filter: {
      isFiltering: true,
      filterType: 'input',    
    }
  },
  {
    name: 'address',
    displayName: 'Address',
    type: 'cs',
    isSorting: false,
    filter: {
      isFiltering: false,
      filterType: 'input',    
    }
  },
  {
    name: 'books',
    displayName: 'Books',
    type: 'cs',
    isSorting: false,
    filter: {
      isFiltering: false,
      filterType: 'input',    
    }
  },
  {
    name: 'id',
    displayName: 'Action',
    html: true,
    htmlName: "Action",
    type: 'num',
    isSorting: false,
    filter: {
      isFiltering: false,
      filterType: 'input'
    },
  },
   {
    name: 'id',
    displayName: 'Delete',
    html: true,
    htmlName: "Delete",
    type: 'num',
    isSorting: false,
    filter: {
      isFiltering: false,
      filterType: 'input'
     }

  },
]

statusChange(GridChanges: any, $event: any) {

  let value = $event.target.value;
  this.filterObject.filter['name'].value = value;
  GridChanges(this.filterObject, this.sortObj);
}

popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({

  header: 'Author Edit'
});

authorDelete(obj: any) {

  debugger;
}

authorEdit(obj: any) {

  //debugger;
  this.popupConfig.isShowPopup = true;
  this.popup?.open(this.popupConfig);
  this.project = obj;
}

close($event: boolean) {

}

  ngOnInit(): void {

    this.filterObject.rows=this.arrayAuthor;
    this.filterObject.data=this.arrayAuthor;
  }

}
