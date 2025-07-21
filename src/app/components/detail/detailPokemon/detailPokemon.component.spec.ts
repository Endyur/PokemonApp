import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPokemonComponent } from './detailPokemon.component';
import { Location } from '@angular/common';

describe('DetailPokemonComponent', () => {
  let component: DetailPokemonComponent;
  let fixture: ComponentFixture<DetailPokemonComponent>;

  const mockLocation = {
    getState: () => ({
      name: 'Pikachu',
      type: 'Eléctrico',
      img: 'https://example.com/pikachu.png',
      height: 4
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPokemonComponent],
      providers: [
        { provide: Location, useValue: mockLocation }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties from location state', () => {
    expect(component.name).toBe('Pikachu');
    expect(component.type).toBe('Eléctrico');
    expect(component.imgUrl).toBe('https://example.com/pikachu.png');
    expect(component.height).toBe(4);
  });
});
