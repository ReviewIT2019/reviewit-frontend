import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../core';
import { Message } from 'primeng/primeng';
import { ActivatedRoute, Params } from '@angular/router'

import { DistributionDTO, StudyMemberDTO } from '../../../model/models'

import { ReviewstrategyService } from './reviewstrategy.service'

@Component({

	selector: 'app-reviewstrategy',
	templateUrl: 'reviewstrategy.component.html',
	styleUrls: ['reviewstrategy.component.css'],
	providers: [],
})

export class ReviewStrategyComponent {

	public model: DistributionDTO;

	results: any[];
	msgs: Message[] = [];

	search(event) {
		this.results = this.researchers
			.filter(user => user.FirstName.indexOf(event.query) >= 0);
	}

	handleDropdown(event) {
		this.results = [];
		this.results = this.researchers;
	}

	onSelectedResearcherChanged(event) {
		this.onPresetChange();
	}

	presets: any[] = [
		{ Id: 0, Name: 'Equal Distribution' },
		{ Id: 1, Name: 'Full Overlap' },
		{ Id: 2, Name: 'Custom' }
	];

	researchers: StudyMemberDTO[];

	get selectedResearchers(){
		return this.model.Dist;
	}

	coverage: number[][] = [];
	coveragePercent: number = 0;

	selectedPreset: any;

	constructor(private msg: MessageService, private api: ReviewstrategyService, private route: ActivatedRoute) {
		this.model = new DistributionDTO();
		this.model.Dist = new Array();
		if (this.selectedPreset === undefined) {
			this.selectedPreset = this.presets[0];
		}
		this.onPresetChange();
	}

	obs: any;
	studyId: number;
	stageId: number;

	ngOnInit() {
		this.route.parent.parent.parent.params.forEach((params: Params) => {
			let studyId = +params['id'];
			this.studyId = studyId;
			this.api.getAllResearchers(studyId).subscribe(
				dto => this.researchers = dto,
				error => this.msg.addError(error)
			)
		});
		this.route.parent.params.forEach((params: Params) => {
			this.stageId = +params['id'];
			this.api.get(this.stageId).subscribe(
				model => {
					this.model = model;
					this.updateRanges();
				},
				error => this.msg.addError(error)
			)
		})
	}

	onPresetChange() {
		if (this.selectedPreset.Id === 0) {
			let rest = 100;
			let last = 0;
			let n = this.selectedResearchers.length;

			for (let researcher of this.selectedResearchers) {
				let share = Math.floor(rest / n);

				researcher.Range = [last, last + share];

				last += share;
				rest -= share;
				n -= 1;
			}
		} else if (this.selectedPreset.Id === 1) {
			for (let researcher of this.selectedResearchers) {
				researcher.Range = [0, 100];
			}
		}
		this.updateRanges();
	}

	onRangeChange() {
		this.updateRanges();
		this.selectedPreset = this.presets[2];
	}

	updateRanges() {

		let coverage: Array<number> = new Array<number>(100);

		for (let i = 0; i < coverage.length; i++) coverage[i] = 0;

		for (let researcher of this.selectedResearchers) {
			let min = researcher.Range[0];
			let max = researcher.Range[1];
			for (let i = min; i < max; i++) coverage[i]++;
		}

		this.coverage = [];

		let start = 0;
		let width = 0;


		for (let i = 0; i < coverage.length; i++) {

			let last = i > 0 ? coverage[i - 1] > 0 : 0;
			let current = coverage[i] > 0;

			if (last && current) width++;
			if (last && !current || (i === coverage.length - 1 && width !== 0)) {
				this.coverage.push([start, width + 1]);
				width = 0;
			}
			if (!current) start = i + 1;
		}

		this.coveragePercent = 0;
		for (let i = 0; i < coverage.length; i++) {
			if (coverage[i] > 0) this.coveragePercent++;
		}
	}

	isValid: boolean = false;

	checkIfValid(): boolean {

		/* Clears messages */
		this.msgs = [];

		if (this.selectedResearchers.length <= 0) {
			this.msgs.push({
				severity: 'warn',
				summary: 'No researchers added',
				detail: 'There must be at least one researcher in a strage.'
			});
		} else if (this.coveragePercent < 100) {
			this.msgs.push({
				severity: 'warn',
				summary: 'Invalid distribution',
				detail: 'The coverage percentage of a review strategy must be 100%.'
			});
		}

		return (this.isValid = this.msgs.length <= 0);
	}

	save() {
		this.api.save(this.stageId, this.model).subscribe(
			bool => this.msg.addSuccess('distribution saved!'),
			error => this.msg.addError(error)
		)
	}
}
