import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlocksService } from '../../services/blocks.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlocksComponent implements OnInit {

  blocks: object[] = [];
  blocksHtml: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    private blocksService: BlocksService
  ) { }

  ngOnInit() {
    this.loadBlocks();
   }

   loadBlocks() {

    this.blocksService.getAll()
    .subscribe(blocks => {
      console.log(blocks);
      this.blocks = blocks;
      this.blocksHtml = this.drawBlocks(blocks);
    },
    error => {

    });
   }

   drawBlocks(blocks) {
    let blocksHtml = '';
    for (let i = 0; i < blocks.length; i++) {
      console.log(blocks[i]);
      if (blocks[i].type === 'generic') {
        blocksHtml += this.drawBlock(blocks[i]);
      } else if (blocks[i].type === 'page') {
        blocksHtml += this.drawFrame(blocks[i]);
      }
    }
    return this.sanitizer.bypassSecurityTrustHtml(blocksHtml);
   }

   drawBlock(block) {
    return '<div class="block" style="' + this.getStyles(block.features.styles) + '">' + block.features.content + '</div>';
   }
   drawFrame(block) {
     console.log(block.features.url);
    return '<object type="text/html" data="' + block.features.url + '" class="block" style="' + this.getStyles(block.features.styles) + '"></object>';
   }

   getStyles(styles) {
     console.log(styles);
     let stylesString = '';
     for (const style in styles) {
      stylesString += style + ':' + styles[style] + ';';
     }
     return stylesString;
   }
}
